<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <p class="font-weight-medium">Filtros:</p>
      </v-col>
    </v-row>

    <v-row class="hidden-sm-and-down">
      <v-col v-for="({ label, items }, i) of groups" :key="i" :cols="colSize">
        <v-autocomplete
          data-cy="dropdownFilter"
          v-model="selected[i]"
          :no-data-text="noData"
          menu-props="auto"
          :label="label"
          :items="items"
          clearable
        ></v-autocomplete>
      </v-col>
    </v-row>

    <v-row
      v-for="({ label, items }, i) of groups"
      :key="i"
      class="hidden-md-and-up"
    >
      <v-col cols="12">
        <v-select
          v-model="selected[i]"
          :no-data-text="noData"
          menu-props="auto"
          :label="label"
          :items="items"
          clearable
        ></v-select>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    groups: {
      type: Array,
      required: true,
      validator(value) {
        return (
          value instanceof Array &&
          value.reduce(
            (acc, el) =>
              acc && el.label && el.items && el.items.length !== undefined,
            true
          )
        );
      },
    },
  },
  data: () => ({
    selected: [],
    noData: "Indisponível",
  }),
  computed: {
    ...mapGetters({
      isEmpty: "competencia/isEmpty",
    }),
    colSize() {
      const nGroups = this.groups.length;

      return nGroups > 4 ? Math.floor(12 / nGroups) : 3;
    },
  },
  watch: {
    selected(list) {
      this.$emit("select", list);
    },
    isEmpty() {
      if (!this.isEmpty && this.$route.query.unidade) {
        this.selected[1] = this.$route.query.unidade;
        this.$emit("select", this.selected);
      }
    },
  },
};
</script>
