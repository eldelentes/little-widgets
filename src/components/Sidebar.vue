<template>
  <div class="sidebar">

    <h3 class="title">Customization</h3>

    <div class="content">
    
      <Panel title="Card Settings">

        <div class="field">
          <label class="label">Card Background</label>
          <InputColor :color="'#fff'" v-model="cardBackground" />
        </div>

        <div class="field">
          <label class="label">Card Width</label>
          <input class="input" type="number" min="400" max="1280" v-model="cardWidth">
        
        </div>

        <div class="field">
          <label class="label">Card Border Radius</label>
          <input class="input" type="range" min="0" max="3" step="0.1" v-model="cardBorderRadius">
        </div>

        <div class="field">
          <label class="label">Card Font Family</label>
          <select v-model="cardFontFamily">
            <option>Roboto</option>
            <option>Circular Std</option>
          </select>
        </div>

        <div class="field">
          <label class="label">Card Text Color</label>
          <InputColor :color="'#000'" v-model="cardTextColor" />
        </div>

        <div class="field">
          <label class="label">Box Shadow</label>
          <input class="input" type="range" min="0" max="10" step="0.1" v-model="cardBoxShadowY">
        </div>

        <div class="field">
          <label class="label">Box Shadow Size</label>
          <input class="input" type="range" min="0" max="10" step="0.1" v-model="cardBoxShadowSize">
        </div>

        <div class="field">
          <label class="label">Box Shadow Opacity</label>
          <input class="input" type="range" min="0" max="1" step="0.1" v-model="cardBoxShadowOpacity">
        </div>

      </Panel>

      <Panel title="Subtitle">
        <div class="field">
          <label class="label">Subtitle</label>
          <input class="input" type="text" v-model="subtitle">
        </div>

        <div class="field">
          <label class="label">Subtitle Style</label>
          <select class="input" v-model="subtitleStyle">
            <option>Uppercase</option>
            <option>Normal</option>
          </select>
        </div>

        <div class="field">
          <label class="label">Subtitle Color</label>
          <InputColor :color="'#000'" v-model="subtitleColor" />
        </div>

      </Panel>

      <Panel title="Title Settings">

        <div class="field">
          <label class="label">Title</label>
          <input class="input" type="text" v-model="title">
        </div>
        
        <div class="field">
          <label class="label">Font Family</label>
          <select v-model="titleFontFamily">
            <option>Roboto</option>
            <option>Circular Std</option>
          </select>
        </div>

        <div class="field">
          <label class="label">Title Color</label>
          <InputColor :color="'#000'" v-model="titleColor" />
        </div>

      </Panel>

      <Panel title="Button Settings">
        <div class="field">
          <label class="label">Button Text</label>
          <input class="input" type="text" v-model="buttonText">
        </div>

        <div class="field">
          <label class="label">Button Background Color</label>
          <InputColor :color="'#000'" v-model="buttonBackground" />
        </div>

        <div class="field">
          <label class="label">Button Text Color</label>
          <InputColor :color="'#fff'" v-model="buttonColor" />
        </div>

        <div class="field">
          <label class="label">Card Border Radius</label>
          <input class="input" type="range" min="0" max="3" step="0.1" v-model="buttonBorderRadius">
        </div>

      </Panel>

    </div> 
  </div>
</template>

<script>
  import { mapFields } from 'vuex-map-fields';
  import { Chrome } from 'vue-color';
  import Panel from './Panel'

  import InputColor from './InputColor'

  export default {
    name: 'Sidebar',
    components: {
      'chrome-picker': Chrome,
      Panel,
      InputColor,
    },
    data() {
      return {
        colors: '#000',
      }
    },
    computed: {
      ...mapFields([
        'content.subtitle',
        'content.title',
        'content.buttonText',
        'cardStyle.cardBackground',
        'cardStyle.cardWidth',
        'cardStyle.cardBorderRadius',
        'cardStyle.cardFontFamily',
        'cardStyle.cardTextColor',
        'cardStyle.cardBoxShadowY',
        'cardStyle.cardBoxShadowSize',
        'cardStyle.cardBoxShadowOpacity',
        'titleStyle.titleFontFamily',
        'titleStyle.titleColor',
        'subtitleStyle.subtitleColor',
        'subtitleStyle.subtitleStyle',
        'buttonStyle.buttonBackground',
        'buttonStyle.buttonColor',
        'buttonStyle.buttonBorderRadius',
      ]),
    }
  }
</script>

<style scoped>
  .sidebar {
    background: #1a202c;
    width: 30%;
    color: #fff;
    padding: 1em 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    height: 100%;
    overflow-x: scroll;
  }

  .title {
    font-size: 0.8em;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: #a0aec0;
    padding: 1em;
  }
  
  .field {
    padding-bottom: 1em;
  }

  .label {
    font-size: 0.8em;
    display: block;
    padding-bottom: 0.2em;
    font-weight: 600;
  }

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
</style>
