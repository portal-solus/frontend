<template>
  <div>
    <v-card v-if="hasItem" height="35rem" class="d-flex flex-column">
      <v-card-title>
        <slot name="itemTitle"></slot>
      </v-card-title>
      <v-card-subtitle>
        <v-chip-group
          v-if="item.keywords && item.keywords.length > 0"
          :column="true"
        >
          <v-chip v-for="kw in item.keywords" :key="kw">{{ kw }}</v-chip>
        </v-chip-group>
      </v-card-subtitle>
      <v-card-text style="overflow-y: auto;">
        <slot name="content"></slot>
      </v-card-text>
      <v-card-actions class="d-flex justify-space-around">
        <slot name="buttons"></slot>
      </v-card-actions>
    </v-card>
    <v-card v-else height="35rem" class="d-flex flex-column justify-center">
      <NotFound></NotFound>
    </v-card>
  </div>
</template>

<script>
import NotFound from "@/components/deeper_levels/NotFound.vue";

export default {
  components: {
    NotFound,
  },
  props: {
    item: {
      type: Object,
      default: () => undefined,
    },
  },
  computed: {
    hasItem() {
      return this.item !== null && this.item !== undefined;
    },
  },
};
</script>
