import Vuex from  'vuex'
import Vue from 'vue'
import projects from './modules/project'

//Load Vuex
Vue.use(Vuex);

//create store
export default new Vuex.Store({
    modules:{
        projects
    }
})
