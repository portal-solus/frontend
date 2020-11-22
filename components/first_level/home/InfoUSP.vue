<template>
  <v-app>
    <v-container fill-height>
      <v-container>
        <v-container>
          <p
            :class="$breakpoint.smAndDown ? 'headline' : 'display-1'"
            class="font-weight-medium"
          >USP: Um lugar para empreender e inovar</p>
        </v-container>

        <v-container>
          <p :class="$breakpoint.smAndDown ? 'body-1' : 'title'" class="font-weight-light">
            A Universidade de São Paulo é, de acordo com diversos rankings
            nacionais e internacionais, a melhor universidade latino-americana
            e uma das melhores universidades do mundo. São mais de 5.000
            professores e 70.000 alunos de graduação e pós, cuja significativa
            produção intelectual, está disponível para empresas e organizações
            por meio de:
          </p>
        </v-container>

        <v-container>
          <v-row align="center">
            <v-col v-for="subpage in subpages" :key="subpage.title" cols="12" lg="6">
              <BlueIconCard :item="subpage" />
            </v-col>
          </v-row>
        </v-container>
      </v-container>
    </v-container>
  </v-app>
</template>

<script>
import BlueIconCard from "@/components/second_level/BlueIconCard.vue";

export default {
  components: {
    BlueIconCard,
  },
  data: () => ({
    subpages: [
      {
        title: "Empresas",
        description:
          "Conheça as empresas com DNA USP, criadas por iniciativas de alunos, ex-alunos e projetos ligados à Universidade",
        iconSrc: "home_partnership_icon.svg",
        dest: "empresas",
        formsURL:
          "https://docs.google.com/forms/d/1q354be1_cPpeSIWVQkU2CXUpjUiyYuC0IU5W1_4W_zA/edit?usp=sharing",
        formsCall: "Cadastre sua empresa",
      },
    ],
  }),
};
</script>

<style>
</style>
