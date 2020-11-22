<template>
  <v-list :data-cy="groupDataCY">
    <v-subheader>{{ title }}</v-subheader>
    <v-list-item-group>
      <v-list-item v-for="(item, index) in items" :key="index">
        <v-list-item-icon class="mr-2">
          <v-icon v-text="'mdi-circle-small'"></v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <p data-cy="bullet-item">{{ item }}</p>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    groupDataCY() {
      return `${ this.title }-bullet-list`;
    }
  }
};
</script>
