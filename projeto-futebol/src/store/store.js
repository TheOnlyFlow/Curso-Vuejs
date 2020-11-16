import Vue from 'vue'
import  Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        ambientes: 'Entrada Portaria',
        news: [{
            id: 1,
            title: 'Camera 1',
            date: 'Ao Vivo',
            img: 'img-1.jpg',
            imgInfo: 'Imagem 1'
          },{
            id: 2,
            title: 'Camera 2',
            date: 'Ao Vivo',
            img: 'img-2.jpg',
            imgInfo: 'Imagem 2'
          }]
    },
    getters:{
        getAmbientes(state){
            return state.ambientes
        },
        getNews(state){
            return state.news
        }
    }
}) 