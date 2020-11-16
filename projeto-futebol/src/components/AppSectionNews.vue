<template>
  <section>
    <div class="container">
      <AppSectionNewsIndividual
        v-for="notice in news"
        :key="notice.id"
        :img-name="notice.img"
        :img-info="notice.imgInfo"
        :news-title="notice.title"
        :news-date="notice.date"
      >
        <template #title>
          <h2>{{ notice.title }}</h2>
        </template>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam
          corporis reiciendis exercitationem aut eius accusamus, vero i mpedit
          mollitia. Recusandae excepturi omnis hic odio cupiditate, labore
          possimus neque quibusdam aspernatur ea.
        </p>
      </AppSectionNewsIndividual>
    </div>
  </section>
</template>

<script>
import AppSectionNewsIndividual from "./AppSectionNewsIndiviual";
import { mapGetters } from "vuex";

export default {
  components: {
    AppSectionNewsIndividual,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      news: "getNews",
    }),
  },
};
</script>

<style scoped>
section {
  padding: 50px 0;
  margin-top: 25px;
  background-color: #06d79c;
}
</style>