<template>
  <v-row
    class="ma-0 mt-12 mx-8"
    align="baseline"
    align-content="space-between"
    justify="center"
    no-gutters
  >
    <v-col
      v-for="{ src, name, role } of people"
      :key="src"
      cols="8"
      md="3"
      lg="1"
      class="d-flex justify-center mx-8"
    >
      <v-card
        class="d-flex flex-column align-center justify-start"
        width="100%"
        elevation="0"
      >
        <v-img
          style="border-radius: 100%"
          :src="src"
          width="85%"
          aspect-ratio="1"
        ></v-img>
        <v-card-title class="body-2 font-weight-medium text-center">
          {{ name }}
        </v-card-title>
        <v-card-subtitle class="text-center caption">
          {{ role }}
        </v-card-subtitle>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: ['people']
}
</script>
