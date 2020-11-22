<template>
  <div>
    <!-- Land -->
    <Banner @search="submitSearch" />

    <!-- Um lugar só com... -->
    <InfoSolusBulletList />

    <!-- USP: Um lugar para empreender... -->
    <InfoUSP />

    <!-- Solus: Encontre o que voce... -->
    <InfoSolusGif />

    <!-- DNA USP -->
    <InfoDNAUSP />

    <!-- AUSPIN -->
    <InfoAuspin />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import Banner from "@/components/first_level/home/Banner.vue";
import InfoSolusBulletList from "@/components/first_level/home/InfoSolusBulletList.vue";
import InfoUSP from "@/components/first_level/home/InfoUSP.vue";
import InfoSolusGif from "@/components/first_level/home/InfoSolusGif.vue";
import InfoDNAUSP from "@/components/first_level/home/InfoDNAUSP.vue";
import InfoAuspin from "@/components/first_level/home/InfoAuspin.vue";

export default {
  components: {
    Banner,
    InfoSolusBulletList,
    InfoUSP,
    InfoSolusGif,
    InfoDNAUSP,
    InfoAuspin,
  },
  computed: {
    ...mapGetters({
      companiesStatus: "empresas/dataStatus",
      companies: "empresas/companies",
    }),
  },
  methods: {
    submitSearch(searchTerm) { console.log(searchTerm) },
  },
  head: {
    title: "Solus",
    meta: [
      {
        name: "google-site-verification",
        content: "6_EEYtY0wjahRpeFmJZ7qcVSuABHdi4mV5wa8Y1FmlE",
      },
    ],
  },
};
</script>

<style>
.dark-blue-layer {
  background: url("~@/vectors/dark_blue_layer.svg");
  position: absolute;
  height: 234px;
  max-height: 100%;
  width: 1180px;
  max-width: 100%;
  bottom: 0;
  left: 0;
}
.light-blue-layer {
  background: url("~@/vectors/light_blue_layer.svg");
  position: absolute;
  height: 388px;
  max-height: 100%;
  width: 1276px;
  max-width: 100%;
  bottom: 0;
  left: 0;
}
</style>
