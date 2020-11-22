<template>
  <v-app>
    <v-toolbar
      class="hidden-sm-and-down d-flex justify-end"
      color="transparent"
      width="75%"
      style="margin-left: 25%;"
      absolute
      flat
    >
      <v-toolbar-items>
        <v-chip-group>
          <v-chip
            v-for="(item, i) in items"
            :key="i"
            :to="item.to"
            class="white--text mx-2 secondary py-4 px-6 subtitle-1"
            >{{ item.title }}</v-chip
          >
        </v-chip-group>
      </v-toolbar-items>
    </v-toolbar>

    <v-app-bar class="hidden-md-and-up" color="white" dense flat fixed>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" fixed temporary>
      <v-list nav dense>
        <v-list-item-group v-model="group">
          <v-list-item v-for="(item, i) in items" :key="i" :to="item.to">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main :class="$vuetify.breakpoint.smAndDown ? 'mt-12' : ''">
      <v-snackbar :multi-line="true" :value="true" :timeout="-1">
        Como está sendo sua experiência com o Solus?
        <v-btn
          class="ml-2"
          href="https://forms.gle/TiEe6zYq9GsYgDww5"
          target="_blank"
          >Relate aqui</v-btn
        >
        <p class="mt-4 font-weight-bold caption text-center">
          Em breve: migração para o domínio usp.br
        </p>
      </v-snackbar>
      <nuxt />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Footer from "@/components/layout/Footer.vue";

export default {
  components: {
    Footer,
  },
  data: () => ({
    activeItem: 0,
    items: [
      {
        title: "Home",
        to: "/",
      },
      {
        title: "Empresas",
        to: "/empresas",
      },
    ],
    drawer: false,
    group: "",
  }),
  head() {
    return {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Monda&display=swap",
        },
      ],
    };
  },
};
</script>

<style>
#app .v-bottom-navigation .v-btn {
  height: inherit !important;
}
.zoom {
  transition: transform 0.2s;
}
.zoom:hover {
  transform: scale(1.1);
}
</style>
