/**
 * Created by stevenbraham on 04-03-17.
 */
import Vue from "vue";
import SendForm from './SendForm.vue';
var VueResource = require('vue-resource');
Vue.use(VueResource);
new Vue({
    el: '#app',
    components: {SendForm}
});