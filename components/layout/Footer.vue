<template>
  <footer class="text-h6 bg-black d-flex flex-column align-center">
    <p class="text-center my-8">Conheça também nossas redes sociais!</p>

    <div class="d-flex justify-center">
      <v-btn
        v-for="{ label, url } in icons"
        :key="label"
        dark
        icon
        class="mx-4 mb-4"
        :href="url"
        target="_blank"
      >
        <v-icon size="35px">{{ label }}</v-icon>
      </v-btn>
    </div>

    <div class="d-flex flex-column flex-md-row justify-center align-center">
      <div class="my-4 mx-2">(11) 3091-4166</div>
      <div class="my-4 mx-2">empreende.auspin@usp.br</div>
    </div>

    <v-container>
      <v-row justify="center">
        <v-col cols="4" md="1">
          <v-img :src="require('@/vectors/codelab-ccsl.svg')"></v-img>
        </v-col>
        <v-col cols="4" md="1" offset-md="1">
          <v-img :src="require('@/vectors/auspin-white.svg')"></v-img>
        </v-col>
        <v-col cols="4" md="1" offset-md="1">
          <v-img :src="require('@/vectors/usp-white.svg')"></v-img>
        </v-col>
      </v-row>
    </v-container>

    <p>{{ new Date().getFullYear() }}</p>
  </footer>
</template>

<script>
export default {
  data: () => ({
    icons: [
      {
        label: "mdi-facebook",
        url: "https://www.facebook.com/inovacaonausp/",
        color: "rgba(59,89,153 ,1 )",
      },
      {
        label: "mdi-twitter",
        url: "https://twitter.com/inovacaonausp",
        color: "#00aced",
      },
      {
        label: "mdi-linkedin",
        url: "https://www.linkedin.com/in/inovacaonausp/",
        color: "#0e76a8",
      },
      {
        label: "mdi-instagram",
        url: "http://www.instagram.com/inovacaonausp/",
        color: "#C13584",
      },
      {
        label: "mdi-youtube",
        url: "https://www.youtube.com/channel/UCD7crX4uDNU-4Hqh-rYgwiQ",
        color: "#C13584",
      },
    ],
  }),
};
</script>

<style scoped>
footer {
  margin: 0;
  padding: 2rem;
  width: 100%;
  min-height: 20vh;
}

.bg-black {
  background-color: #212121;
  color: #f9f9f9;
}
</style>
