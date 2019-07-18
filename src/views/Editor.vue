<template>
    <div class="screen">
        <Sidebar />
        <div class="preview">
            <button class="embed-button" @click="saveWidgetData">Embed on my site</button>
            <card-widget v-bind:widget-image="widgetImage" v-bind:widget-subtitle="$store.state.content.subtitle" v-bind:widget-title="$store.state.content.title" v-bind:widget-button-text="$store.state.content.buttonText"></card-widget>
        </div>
    </div>
</template>

<script>

import CardWidget from '../components/CardWidget'
import Sidebar from '../components/Sidebar.vue'
import { db } from '@/main'

export default {
  name: 'Editor',
  components: {
    CardWidget,
    Sidebar,
  },
  data() {
    return {
      widgetImage: 'https://randomuser.me/api/portraits/men/32.jpg'
    };
  },
  methods: {
    saveWidgetData: function () {
        let widgetData = {
            wid: this.generateUUID(),
            cardBackground: this.$store.state.cardStyle.cardBackground,
            cardWidth: this.$store.state.cardStyle.cardWidth,
            cardBorderRadius: this.$store.state.cardStyle.cardBorderRadius,
            cardFontFamily: this.$store.state.cardStyle.cardFontFamily,
            cardTextColor: this.$store.state.cardStyle.cardTextColor,
            cardBoxShadowY:this.$store.state.cardStyle.cardBoxShadowY,
            cardBoxShadowSize: this.$store.state.cardStyle.cardBoxShadowSize,
            cardBoxShadowOpacity: this.$store.state.cardStyle.cardBoxShadowOpacity,
            subtitle : this.$store.state.content.subtitle,
            title : this.$store.state.content.title,
            buttonText : this.$store.state.content.buttonText,
            titleFontFamily : this.$store.state.titleStyle.titleFontFamily,
            titleColor : this.$store.state.titleStyle.titleColor,
            subtitleColor : this.$store.state.subtitleStyle.subtitleColor,
            subtitleStyle : this.$store.state.subtitleStyle.subtitleStyle,
            buttonBackground : this.$store.state.buttonStyle.buttonBackground,
            buttonColor : this.$store.state.buttonStyle.buttonColor,
            buttonBorderRadius : this.$store.state.buttonStyle.buttonBorderRadius,
        }

        db.collection('widgets').add({
            widgetData
        }).then((response) => {
            if (response) {
                console.log("todo cool")
            }
        }).catch((error) => {
            this.errors = error
        })
    },
    generateUUID () {
      let d = new Date().getTime()
      let wid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        let r = (d + Math.random() * 16) % 16 | 0
        d = Math.floor(d / 16)
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16)
      })
      return wid
    }
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .screen {
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
