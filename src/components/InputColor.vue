<template>
  <div class="picker" ref="colorpicker">
    <input class="input" type="text"  v-model="colorValue" @focus="showPicker()" @input="updateFromInput" />

    <div class="current-color" :style="'background-color: ' + colorValue" @click="togglePicker()">
      <chrome-picker :value="colors" @input="updateFromPicker" v-if="displayPicker" />
    </div>
  </div>
</template>

<script>
  import { Chrome } from 'vue-color';

  export default {
    name: 'InputColor',
    components: {
      'chrome-picker': Chrome,
    },
    props: ['color'],
    data() {
      return {
        colors: {
          hex: '#000000',
        },
        colorValue: '',
        displayPicker: false,
      };
    },
    mounted() {
		    this.setColor(this.color || '#000000');
    },
    methods: {
      setColor(color) {
        this.updateColors(color);
        this.colorValue = color;
      },
      updateColors(color) {
        if(color.slice(0, 1) == '#') {
          this.colors = {
            hex: color
          };
        }
        else if(color.slice(0, 4) == 'rgba') {
          var rgba = color.replace(/^rgba?\(|\s+|\)$/g,'').split(','),
            hex = '#' + ((1 << 24) + (parseInt(rgba[0]) << 16) + (parseInt(rgba[1]) << 8) + parseInt(rgba[2])).toString(16).slice(1);
          this.colors = {
            hex: hex,
            a: rgba[3],
          }
        }
      },
      showPicker() {
        document.addEventListener('click', this.documentClick);
        this.displayPicker = true;
      },
      hidePicker() {
        document.removeEventListener('click', this.documentClick);
        this.displayPicker = false;
      },
      togglePicker() {
			  this.displayPicker ? this.hidePicker() : this.showPicker();
      },
      updateFromInput() {
			  this.updateColors(this.colorValue);
      },
      updateFromInput() {
			  this.updateColors(this.colorValue);
      },
      updateFromPicker(color) {
        this.colors = color;
        if(color.rgba.a == 1) {
          this.colorValue = color.hex;
        }
        else {
          this.colorValue = 'rgba(' + color.rgba.r + ', ' + color.rgba.g + ', ' + color.rgba.b + ', ' + color.rgba.a + ')';
        }
      },
      documentClick(e) {
        var el = this.$refs.colorpicker,
          target = e.target;
        if(el !== target && !el.contains(target)) {
          this.hidePicker()
        }
      }
    },
    watch: {
      colorValue(val) {
        if(val) {
          this.updateColors(val);
          this.$emit('input', val);
          //document.body.style.background = val;
        }
      }
    }
  }
</script>


<style scoped>
  .input {
    width: 100%;
    padding: 1em;
    color: #fff;
    border: 0;
    outline: 0;
    border-radius: 0.2em;
    background:#4a5568;
    font-size: 1.1em;
  }

  .picker {
    display: flex;
    position: relative;
  }

  .current-color {
    width: 4em;
    height: 3.5em;
    border-radius: 0.4em;
    margin-left: 1em;
  }

  .vc-chrome {
    position: absolute;
    bottom: 0px;
    right: 0;
    transform: translateY(100%);
  }
</style>
