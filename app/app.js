import './assets/scss/styles.scss';
import Vue from 'vue';
import router from './router';


import VueAxios from 'vue-axios';
import axios from 'axios';



Vue.use(VueAxios, axios);



Vue.config.productionTip = false;

new Vue({ router: router }).$mount('#root');
