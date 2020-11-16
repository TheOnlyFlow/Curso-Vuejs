<template>
    <div> 
        <div class="container">
            <div class="row mt-5">
                <h3>Você esta visualizando as câmeras do ambiente:
                    {{ambientes}}
                </h3>
            </div>
        </div>
        <component :is='currentComponent'></component>
       
    </div>
</template>

<script>

import AppSectionBanner from './AppSectionBanner'
import { mapGetters } from 'vuex'

export default {
    components: {
        AppSectionBanner,
         AppSectionNews: ()=> import('./AppSectionNews')
    },
    data(){
        return{
            
        }
    },
    props: {
        
        currentComponent: String
    },
    computed: {
        ...mapGetters({
            ambientes: 'getAmbientes'
        })

    }
    
}
</script>

<style scoped>

</style>