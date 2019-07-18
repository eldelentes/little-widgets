<template>
    <div class="lw-card" v-bind:style="{
        width: cardWidth + 'px' ,
        background: cardBackground,
        borderRadius: cardBorderRadius + 'em' ,
        fontFamily: cardFontFamily,
        color: cardTextColor,
        boxShadow: cardBoxShadow,
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
    </div>
</template>

<script>
  import { db } from '@/main'

  export default {
    name: 'widget',
    data() {
      return {
        widgets: {},
        cardWidth: 0,
        cardBackground: '',
        cardBorderRadius: 0 ,
        cardFontFamily: '',
        cardColor: '',
        cardBoxShadow: '',
        cardTextColor: '',
      };
    },
    beforeCreate () {
        db.collection('widgets').where('widgetData.wid', '==',  this.$route.params.widget).get().then((querySnapshot) => {   
            querySnapshot.forEach((doc) => {
                
                const widget = doc.data().widgetData

                this.cardWidth = widget.cardWidth;
                this.cardBackground = widget.cardBackground;
                this.cardBorderRadius = widget.cardBorderRadius;
                this.cardFontFamily = widget.cardFontFamily;
                this.cardColor = widget.cardColor;
                this.cardBoxShadow = widget.cardBoxShadow;
                this.cardTextColor = widget.cardTextColor;
            });
        });
    }
  }
</script>

<style lang="scss" scoped>
</style>