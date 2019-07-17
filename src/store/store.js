import Vue from 'vue'
import Vuex from 'vuex'
import { getField, updateField } from 'vuex-map-fields';

Vue.use(Vuex)


export const store = new Vuex.Store({
    state: {
        content: {
            subtitle: 'Contact Eduardo',
            title: 'Customize the title of the headline',
            buttonText: 'Contact',
        },
        cardStyle: {
            cardBackground: '#fff',
            cardWidth: '400',
            cardBorderRadius: '0.6',
            cardFontFamily: 'Roboto',
            cardTextColor: '#fff',
            cardBoxShadowY: '4',
            cardBoxShadowSize: '6',
            cardBoxShadowOpacity: '0.1',
        },
        titleStyle: {
            titleFontFamily: 'Roboto',
            titleColor: '#fff',
        },
        subtitleStyle: {
            subtitleStyle: 'Normal',
            subtitleColor: '#fff',
        },
        buttonStyle: {
            buttonBackground: '#000',
            buttonColor: '#fff',
            buttonBorderRadius: '0.4',
        }
    },
    mutations: {
        updateField,
    },
    getters: {
        getField,
    }
})