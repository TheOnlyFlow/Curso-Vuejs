<template>
  <div id="app">
    <AppHeader
      @select-ambientes="changeAmbientes"
      @change-component="changeComponent"
    />

    <AppSection
      :ambientes="ambientes"
      :current-component="currentSectionComponent"
    />

    <AppFooter />
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";
import AppSection from "./components/AppSection";


export default {
  name: "App",
  components: {
    AppHeader,
    AppSection,
    AppFooter,
  },
  data() {
    return {
      currentSectionComponent: "AppSectionBanner",
    }
  },
  methods: {
    changeAmbientes(value) {
      this.ambientes = value;
    },
    changeComponent(value) {

      let component;

      switch (value) {
        
         
        default:
          component = 'AppSectionBanner';
          
          break;

        case 'feed':
          component = 'AppSectionNews'
          
          break;
      }

      this.currentSectionComponent = component;
    }
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Rajdhani&display=swap");
</style>
