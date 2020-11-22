<template>
  <v-app style="max-height: 100vh;">
    <v-carousel cycle interval="3000" height="100%" hide-delimiters :show-arrows="false">
      <v-carousel-item v-for="(photo, i) in photos" :key="i" :src="photo"></v-carousel-item>
    </v-carousel>

    <div
      style="
          position: absolute;
          top: 0;
          height: 100%;
          width: 100%;
          overflow: auto;
        "
    >
      <v-row class="fill-height fit-page ma-0">
        <v-col style="background-color: rgba(255, 177, 99, 0.9);" cols="12" sm="10" md="7">
          <v-container class="fill-height">
            <v-row class="mt-5" justify="center">
              <v-col cols="11" sm="10">
                <v-row>
                  <v-col cols="8" offset="1">
                    <v-img contain eager aspect-ratio="4" max-height="25%" position="left" class="mb-4"
                    :src="require('@/static/Solus_Branco.png')" alt="Portal Solus" data-cy="solus-logo"></v-img>
                    <p
                      class="white--text font-weight-medium ma-0"
                      :class="$breakpoint.smAndDown ? 'body-1' : 'title'"
                    >
                      Aqui você encontra as mais diversas informações sobre
                      empreendedorismo e inovação na Universidade de São Paulo
                    </p>
                  </v-col>
                </v-row>

                <v-row class="mt-8">
                  <v-col cols="10" offset="1">
                    <p
                      class="white--text font-weight-light"
                      :class="$breakpoint.smAndDown ? 'body-2' : 'body-1'"
                    >
                      Você pode navegar usando as páginas específicas ou fazer
                      uma busca geral utilizando palavras-chave.
                    </p>

                    <v-text-field
                      v-model="search"
                      solo
                      flat
                      rounded
                      label="Buscar"
                      append-outer-icon="search"
                      :dense="$breakpoint.smAndDown"
                      :style="setSearchBarWidth"
                      @keydown.enter="submitSearch"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="11" sm="10" offset="1">
                <v-row>
                  <v-col cols="4" offset="1" md="2">
                    <v-img :src="require('@/vectors/auspin-white.svg')"></v-img>
                  </v-col>
                  <v-col cols="4" offset="1" md="2">
                    <v-img :src="require('@/vectors/usp-white.svg')"></v-img>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </div>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    search: "",
    photos: [
      "https://drive.google.com/uc?export=view&id=1LY-uEAEHe2P9u_XV5uKLLJ3JZNIN-aP_",
      "https://drive.google.com/uc?export=view&id=1NqgS5xA7fiuNeLw6a7c8o2iODwvGoKUf",
      "https://drive.google.com/uc?export=view&id=1B6Z1xhrR4HUW6IPK0wibbySgIUI7zkyq",
      "https://drive.google.com/uc?export=view&id=1noqN6J00K_gApnxipphkoO1dSc94uyRA",
      "https://drive.google.com/uc?export=view&id=1LnKvl-J3itQNJXAra8dGNRrjNU32eXvT",
      "https://drive.google.com/uc?export=view&id=11q5iV1doJJtPVg6rae1foNQrRK8HFA6N",
      "https://drive.google.com/uc?export=view&id=1TGRLFy-xmGVel53gourwOkVjR5jzXFmf",
      "https://drive.google.com/uc?export=view&id=14Q0bryyJs2z2s2nX20ZMw3ut1CPlTCph",
      "https://drive.google.com/uc?export=view&id=1vKoczY2udyjhcqeElKoFneJp-Hmikayw",
      "https://drive.google.com/uc?export=view&id=1r2T6X1ahUfRuPtzU2dEpID6JP78NJ-7N",
      "https://drive.google.com/uc?export=view&id=1XKiBtRqCL9MNtQbT8bV0sG5kltXSxAwE",
      "https://drive.google.com/uc?export=view&id=1U-34cO-E5ttMoNGhLuh_SDKc4nV5qD7U",
      "https://drive.google.com/uc?export=view&id=18UeYn9wtiJXeypA7dZsJ_P4o3KnCGOXB",
      "https://drive.google.com/uc?export=view&id=1yFGreZMuzn12rMNw59b2VVFrxPI6CAz2",
      "https://drive.google.com/uc?export=view&id=1O5-2254Ke31vE3NtErwexHTzTcTBNEBC",
      "https://drive.google.com/uc?export=view&id=1C6-Uso1KmAH6GI0_MrjgU_t7WPuKqtVF",
      "https://drive.google.com/uc?export=view&id=1ETGk0u9tX_acFeuFCeXgdJ442A5HUTID",
      "https://drive.google.com/uc?export=view&id=1iVpkjcOrkykeERJHFanSPilh_f3MNyMA",
      "https://drive.google.com/uc?export=view&id=1cEFsuI3isXJNlPWRJPBseJd1f0Hm6MBg",
      "https://drive.google.com/uc?export=view&id=1CeBViKGSXV3W11kb71wPnh6EjWt21WPQ",
      "https://drive.google.com/uc?export=view&id=1d253p6wZe2YTPYk958ZmyjydXG201iJC",
      "https://drive.google.com/uc?export=view&id=1msf_zE5QUGX9bEXCVYnoWsfx6UwHzLMo",
      "https://drive.google.com/uc?export=view&id=1g4_Rqb0UO35O7polf5QNX5co0BLDjfwh",
      "https://drive.google.com/uc?export=view&id=1s54KawydDXQwXalKf1_yzcTrGkGuToqE",
      "https://drive.google.com/uc?export=view&id=1sPmzecGIXsJ_g-XQzRFsOjk5oPzFIKzH",
      "https://drive.google.com/uc?export=view&id=1UAilQdxghkOD2kwysevV70yULnMLuqcg",
      "https://drive.google.com/uc?export=view&id=1nhMMadbmwgJ_Vx6-O7nhqozSjb_SA1wZ",
      "https://drive.google.com/uc?export=view&id=1_01Vsv0GmD0NRbAut64gAykDjP-nG0kM",
      "https://drive.google.com/uc?export=view&id=1Gvs7q-w59HUKVRKCRUvUm-X2Q2K7wvRn",
      "https://drive.google.com/uc?export=view&id=1UpCFT38dXSB27d3hEE4DB_0adAJJPYHT",
      "https://drive.google.com/uc?export=view&id=1Pq6BONVZSv3heo5fWTFj4eecmkqwUGVA",
      "https://drive.google.com/uc?export=view&id=1QS6O4_Qfk4HMp_r-BShxXhDEvhuH5-vp",
      "https://drive.google.com/uc?export=view&id=15RDBiOUAdH-4BfOO2oA1QNfdY555EUno",
      "https://drive.google.com/uc?export=view&id=16H3EuU7ZdDGh93APKsNZtQma-trtr6nh",
      "https://drive.google.com/uc?export=view&id=1F4-TcsQKAgMIiCs5_80LEWiUyVUKadc4",
      "https://drive.google.com/uc?export=view&id=14cc6vp-0sS8vb4O93GyRwlzfapZVaBh2",
    ],
  }),
  computed: {
    setSearchBarWidth() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return { width: "100%" };
        case "sm":
          return { width: "80%" };
        default:
          return { width: "60%" };
      }
    },
  },
  methods: {
    submitSearch() {
      this.$emit("search", this.search);
    },
  },
};
</script>

<style scoped>
.fit-page {
  max-width: 100%;
  max-height: 100%;
}
</style>
