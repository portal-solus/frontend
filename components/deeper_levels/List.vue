<template>
  <v-card
    height="35rem"
    class="d-flex flex-column"
    :class="{ 'justify-center': items.length == 0 }"
  >
    <div v-if="items.length > 0">
      <div class="d-flex justify-center">
        <v-icon large>keyboard_arrow_up</v-icon>
      </div>

      <v-list
        rounded
        height="30rem"
        max-height="100%"
        style="overflow-y: auto;"
      >
        <v-list-item-group v-model="selectedItem" model="id">
          <v-list-item v-for="i in items" :key="i.id" :value="i">
            <v-list-item-content>
              <v-list-item-title v-text="i.name" />
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>

      <div class="d-flex justify-center">
        <v-icon large>keyboard_arrow_down</v-icon>
      </div>
    </div>
    <div data-cy="listEmpty" v-else>
      <NotFound />
    </div>
  </v-card>
</template>

<script>
import NotFound from "@/components/deeper_levels/NotFound.vue";

export default {
  components: {
    NotFound,
  },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    value: {
      type: Object,
      default: () => ({}),
    },
  },
  data: () => ({
    selectedItem: null,
  }),
  watch: {
    selectedItem() {
      this.$emit("input", this.selectedItem);
    },
  },
};
</script>

<style></style>
