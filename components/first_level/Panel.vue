<template>
  <v-container fill-height fluid style="position: relative; min-height: 20rem;">
    <v-row class="ma-0 mt-12" align="center" justify="space-around" no-gutters>
      <v-col>
        <v-row class="ma-0" justify="center">
          <v-col cols="12" sm="9">
            <p class="display-2 font-weight-regular">{{ title }}</p>

            <p class="title font-weight-light" style="line-height: normal;">
              {{ description }}
            </p>

            <p v-for="{ cURL, text } of callsToAction" :key="cURL">
              <v-btn
                rounded
                color="secondary"
                :href="cURL"
                target="_blank"
                :width="callToActionWidth"
                >{{ text }}</v-btn
              >
            </p>
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="11" sm="5" align-self="end">
        <v-row class="ma-0">
          <v-col>
            <v-text-field
              id="search-bar"
              v-model="value"
              :background-color="searchBarColor"
              solo
              flat
              rounded
              color="tertiary"
              :label="'Buscar - ' + title"
              append-outer-icon="search"
              :style="setSearchBarWidth"
              :loading="loading"
              :hint="hint"
              persistent-hint
              @keydown.enter="submitSearch"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { debounce } from "debounce";
import { mapGetters } from "vuex";

export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: "",
    },
    url: {
      type: String,
      default: "",
    },
    formsCall: {
      type: String,
      default: "",
    },
    secondUrl: {
      type: String,
      default: "",
    },
    secondCall: {
      type: String,
      default: "",
    },
    loading: {
      type: Boolean,
      default: false,
    },
    searchBarColor: {
      type: String,
      default: "#88E3FF",
    },
    value: {
      type: String,
      required: false,
      default: "",
    },
  },
  computed: {
    ...mapGetters({
      strictSearchResults: "global/strictSearchResults"
    }),
    hint() {
      const strict = "Resultados de busca na caixa abaixo";
      const flexible = "Resultados aproximados de busca na caixa abaixo";

      return this.strictSearchResults ? strict : flexible;
    },
    setSearchBarWidth() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return { width: "100%" };
        case "sm":
          return { width: "80%" };
        default:
          return { width: "70%" };
      }
    },
    hasCallToAction() {
      return this.url !== "" && this.formsCall != "";
    },
    hasSecondCallToAction() {
      return this.secondUrl !== "" && this.secondCall != "";
    },
    callToActionWidth() {
      return this.$breakpoint.smAndDown ? "100%" : "60%";
    },
    callsToAction() {
      const base = [];

      if (this.hasCallToAction) {
        base.push({
          cURL: this.url,
          text: this.formsCall,
        });
      }

      if (this.hasSecondCallToAction) {
        base.push({
          cURL: this.secondUrl,
          text: this.secondCall,
        });
      }

      return base;
    },
  },
  watch: {
    value: debounce(function () {
      this.$emit("input", this.value);
    }, 500),
  },
  methods: {
    submitSearch() {
      if (!this.value.trim()) return;
      this.$emit("search", this.value);
    },
  },
};
</script>

<style scoped></style>
