<template>
  <div id="app">
    <editor/>
    <div class="preview">
      <button class="embed-button" >Embed on my site</button>
      <card-widget v-bind:widget-image="widgetImage" v-bind:widget-subtitle="$store.state.content.subtitle" v-bind:widget-title="$store.state.content.title" v-bind:widget-button-text="$store.state.content.buttonText"></card-widget>
    </div>
  </div>
</template>

<script>
import CardWidget from './components/CardWidget.vue'
import Editor from './components/Editor.vue'

export default {
  name: 'app',
  components: {
    CardWidget,
    Editor
  },
  data() {
    return {
      widgetImage: 'https://randomuser.me/api/portraits/men/32.jpg'
    };
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #app {
    display: flex;
    height: 100vh;
  }

  .preview {
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .embed-button {
    background: #000;
    border: 0;
    padding: 1em 2em;
    border-radius: 0.3em;
    color: #fff;
    position: absolute;
    top: 1em;
    right: 1em;
  }

  body {
    background: #F7FAFC;
  }
</style>
