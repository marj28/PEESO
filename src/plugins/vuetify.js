import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: '#77dd77',
            secondary: '#77dd77',
            tertiary: '#e2a836',
            accent: '#82B1FF',
            error: '#f55a4e',
            info: '#00d3ee',
            success: '#5cb860',
            warning: '#ffa21a',
            fourth: '#1c775a',
            fifth: '#cfd0c3'
            
          },
        },
      }
});
