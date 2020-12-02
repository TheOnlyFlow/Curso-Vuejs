import Vue from 'vue'
import  Vuex from 'vuex'

import ambientesModule from './modules/ambientesModule'

import newsModel from './modules/newsModule'


Vue.use(Vuex)

export default new Vuex.Store({
    
    modules: {
        ambientesModule,
        newsModel
    }
}) 