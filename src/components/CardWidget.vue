<template>
  <div class="lw-card" v-bind:style="{
    width: $store.state.cardStyle.cardWidth + 'px' ,
    background: $store.state.cardStyle.cardBackground,
    borderRadius: $store.state.cardStyle.cardBorderRadius + 'em' ,
    fontFamily: $store.state.cardStyle.cardFontFamily,
    color: $store.state.cardStyle.cardTextColor,
    boxShadow: boxShadow,
  }">
      <div class="lw-card__close">
          <svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="Desktop-HD" transform="translate(-481.000000, -139.000000)">
                      <g id="Group-4" transform="translate(173.000000, 113.000000)">
                          <path d="M319,35 L330,35 L330,37 L319,37 L319,48 L317,48 L317,37 L306,37 L306,35 L317,35 L317,24 L319,24 L319,35 Z" id="Combined-Shape" transform="translate(318.000000, 36.000000) rotate(-45.000000) translate(-318.000000, -36.000000) "></path>
                      </g>
                  </g>
              </g>
          </svg>
      </div>
      <header class="lw-card__header">
          <div class="lw-card__avatar" v-bind:style="{ backgroundImage: 'url(' + widgetImage + ')' }"></div>
      </header>
      <div class="lw-card__content">
          <h4 class="lw-card__subtitle" v-bind:style="{
            textTransform: $store.state.subtitleStyle.subtitleStyle,
            color: $store.state.subtitleStyle.subtitleColor,
          }">{{ widgetSubtitle }}</h4>
          <h2 class="lw-card__title" v-bind:style="{
            fontFamily: $store.state.titleStyle.titleFontFamily,
            color: $store.state.titleStyle.titleColor,
          }">{{  widgetTitle }}</h2>
      </div>
      <div class="lw-card__action">
          <a class="lw-card__button" href="#" v-bind:style="{
            background: $store.state.buttonStyle.buttonBackground,
            color: $store.state.buttonStyle.buttonColor,
            borderRadius: $store.state.buttonStyle.buttonBorderRadius + 'em',
          }">{{ widgetButtonText }}</a>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'CardWidget',
    props: [
      'widgetImage',
      'widgetSubtitle',
      'widgetTitle',
      'widgetButtonText',
      'widgetButtonAction'
    ],
    data() {
      return {
      };
    },
    computed: {
      boxShadow() {
        return "0px " + this.$store.state.cardStyle.cardBoxShadowY + "px " + this.$store.state.cardStyle.cardBoxShadowSize + "px rgba(0,0,0, " + this.$store.state.cardStyle.cardBoxShadowOpacity + ")"
      }
    },
    mounted(){
      
    },
  }
</script>

<style lang="scss" scoped>

  .lw-card {
    padding: 2em;
    text-align: center;
    position: relative;

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    &__close {
      position: absolute;
      top: 1.5em;
      right: 1.5em;
      transition: all 0.2s ease;

      &:hover {
        opacity: 0.5;
        cursor: pointer;
      }

      &:active { transform: scale(0.8); }

      svg g {
        fill: currentColor;
        opacity: 0.8;
      }
    }

    &__avatar {
      height: 4em;
      width: 4em;
      border-radius: 50%;
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      position: relative;
      margin: 0 auto;
      
      &:before {
        content: '';
        border-radius: 50%;
        padding: 0.5em;
        position: absolute;
        bottom: 0;
        right: 0;
        background-image: linear-gradient(180deg, #9EF77F 0%, #64EB48 100%);
        animation: pulse 1s ease infinite;
      }
    }

    &__content { padding: 1em 0; }
    &__subtitle { font-size: 1em; }
    &__title { font-size: 2em; }

    &__action {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    &__button {
      display: inline-block;
      text-decoration: none;
      padding: 1em 2em;
      font-size: 1.2em;
      font-weight: 600;
      transition: all 0.2s linear;

      &:hover { filter: hue-rotate(20deg); }
      &:active { transform: scale(0.95); }
    }
  } 

  @keyframes pulse {
    0%,
    100% {
      transform: scale(1);
      filter: saturate(1.5);
    }
    50% {
      transform: scale(0.9);
      filter: saturate(1);
    }
  }

</style>
