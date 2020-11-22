<template>
  <div>
    <div class="background">
      <Panel
        v-model="search.term"
        title="Empresas"
        description="Incubadoras e outras estruturas da Universidade facilitam a criação de empresas e negócios por parte de estudantes e pesquisadores. Estas são as empresas com DNA USP que estão organizadas, no Portal Solus, por áreas de atuação e tecnologias aplicáveis. Com o nosso mecanismo de busca, é possível consultar as empresas por palavras-chave ou CNAEs (Classificação Nacional de Atividades Econômicas)."
        url="https://docs.google.com/forms/d/1q354be1_cPpeSIWVQkU2CXUpjUiyYuC0IU5W1_4W_zA/edit?usp=sharing"
        forms-call="Cadastre sua empresa aqui"
      />
      <USPDNA />
    </div>

    <Background />

    <MultipleFilters
      :tabs="tabs"
      :groups="groups"
      :colors="{ base: '#074744', active: '#0A8680' }"
      @select="filters = $event"
    />

    <DisplayData :items="displayItems" group-name="Empresas" :selected="globalSearchSelected">
      <template #title="{ item }">{{ item.name }}</template>
      <template #detailsText="{ item }">
        <v-container>
          <p v-for="phone in item.phones" :key="phone">{{ phone }}</p>
          <p v-for="email in item.emails" :key="email">{{ email }}</p>
        </v-container>
      </template>
      <template #detailsImg="{ item }">
        <v-img v-if="item.logo" eager :src="item.logo"></v-img>
      </template>
      <template #content="{ item }">
        <p v-if="item.incubated">
          <span class="font-weight-bold">Incubadora{{ item.ecosystems.length > 1 ? "(s)" : "" }}</span>
          <span v-for="incub of item.ecosystems" :key="incub">{{ incub }};&nbsp;</span>
        </p>

        <p>
          <span class="font-weight-bold">Descrição</span>
          {{ item.description.long }}
        </p>

        <p>
          <span class="font-weight-bold">Produtos e Serviços</span>
          {{ item.services }}
        </p>

        <BulletList
          v-if="item.technologies.length > 0"
          title="Tecnologias"
          :items="item.technologies"/>
      </template>
      <template #actions="{ item }">
        <v-btn class="white--text" color="#2bc570" :href="item.url" :disabled="!item.url" target="_blank">Saiba Mais</v-btn>
      </template>
    </DisplayData>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import Background from "@/components/first_level/Background.vue";
import USPDNA from "@/components/first_level/USPDNA.vue";
import Panel from "@/components/first_level/Panel.vue";
import MultipleFilters from "@/components/first_level/MultipleFilters.vue";
import DisplayData from "@/components/first_level/DisplayData.vue";
import BulletList from "@/components/first_level/BulletList.vue";

export default {
  components: {
    Panel,
    MultipleFilters,
    Background,
    DisplayData,
    USPDNA,
    BulletList,
  },
  data: () => ({
    baseTabs: [
      {
        name: "Agricultura, Pecuária, Pesca e Extrativismo",
        CNAECodes: ["01", "02", "03", "04", "05", "06", "07", "08", "09"],
      },
      {
        name: "Indústria de Transformação",
        CNAECodes: [
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "19",
          "20",
          "21",
          "22",
          "23",
          "24",
          "25",
          "26",
          "27",
          "28",
          "29",
          "30",
          "31",
          "32",
          "33",
        ],
      },
      {
        name: "Infraestrutura e Construção",
        CNAECodes: ["35", "36", "37", "38", "39", "40", "41", "42", "43"],
      },
      {
        name: "Comércio e Serviços",
        CNAECodes: [
          "45",
          "46",
          "47",
          "48",
          "49",
          "50",
          "51",
          "52",
          "53",
          "54",
          "55",
          "56",
          "57",
          "58",
          "59",
          "60",
          "61",
          "62",
          "63",
          "64",
          "65",
          "66",
          "67",
          "68",
          "94",
          "95",
          "96",
          "97",
        ],
      },
      {
        name: "Atividades Profissionais, Científicas e Técnicas",
        CNAECodes: [
          "69",
          "70",
          "71",
          "72",
          "73",
          "74",
          "75",
          "76",
          "77",
          "78",
          "79",
          "80",
          "81",
          "82",
          "83",
          "84",
          "99",
        ],
      },
      {
        name: "Educação, Artes e Esportes",
        CNAECodes: ["85", "90", "91", "92", "93"],
      },
      {
        name: "Saúde e Serviços Sociais",
        CNAECodes: ["86", "87", "88"],
      },
    ],
    cnae: {
      "01": "Agricultura, Pecuária, Produção Florestal, Pesca e Aquicultura",
      "02": "Agricultura, Pecuária, Produção Florestal, Pesca e Aquicultura",
      "03": "Agricultura, Pecuária, Produção Florestal, Pesca e Aquicultura",
      "04": "Agricultura, Pecuária, Produção Florestal, Pesca e Aquicultura",
      "05": "Indústrias Extrativas",
      "06": "Extração de Petróleo e Gás Natural",
      "07": "Indústrias Extrativas",
      "08": "Indústrias Extrativas",
      "09": "Indústrias Extrativas",
      "10": "Alimentos",
      "11": "Bebidas",
      "12": "Produtos do Fumo",
      "13": "Produtos Têxteis",
      "14": "Vestuário e Acessórios",
      "15": "Artefatos de Couro, Artigos para Viagem e Calçados",
      "16": "Produtos de Madeira",
      "17": "Celulose e Papel",
      "18": "Impressão e Reprodução de Gravações",
      "19": "Coque, Derivados de Petróleo e de Biocombustíveis",
      "20": "Produtos Químicos",
      "21": "Produtos Farmaquímicos e Farmacêuticos",
      "22": "Produtos de Borracha e de Material Plástico",
      "23": "Produtos de Minerais Não-Metálicos",
      "24": "Metalurgia",
      "25": "Produtos de Metal, exceto Máquinas e Equipamentos",
      "26": "Equipamentos de Informática, Produtos Eletrônicos e Ópticos",
      "27": "Máquinas, Aparelhos e Materiais Elétricos",
      "28": "Máquinas e Equipamentos",
      "29": "Automóveis, Reboques e Carrocerias",
      "30": "Equipamentos de Transporte, exceto Veículos Automotores",
      "31": "Móveis",
      "32": "Produtos Diversos",
      "33": "Manutenção, Reparação e Instalação de Máquinas e Equipamentos",
      "34": "Eletricidade e Gás",
      "35": "Eletricidade e Gás",
      "36": "Água, Esgoto, Atividades de Gestão de Resíduos e Descontaminação",
      "37": "Água, Esgoto, Atividades de Gestão de Resíduos e Descontaminação",
      "38": "Água, Esgoto, Atividades de Gestão de Resíduos e Descontaminação",
      "39": "Água, Esgoto, Atividades de Gestão de Resíduos e Descontaminação",
      "40": "Água, Esgoto, Atividades de Gestão de Resíduos e Descontaminação",
      "41": "Construção",
      "42": "Construção",
      "43": "Construção",
      "44": "Construção",
      "45": "Comércio e Reparação de Veículos Automotores e Motocicletas",
      "46": "Comércio por Atacado, exceto Veículos Automotores e Motocicletas",
      "47": "Comércio Varejista",
      "48": "Comércio Varejista",
      "49": "Comércio Varejista",
      "50": "Comércio Varejista",
      "51": "Comércio Varejista",
      "52": "Comércio Varejista",
      "53": "Comércio Varejista",
      "54": "Comércio Varejista",
      "55": "Alojamento e Alimentação",
      "56": "Alojamento e Alimentação",
      "57": "Alojamento e Alimentação",
      "58": "Informação e Comunicação",
      "59": "Informação e Comunicação",
      "60": "Informação e Comunicação",
      "61": "Informação e Comunicação",
      "62": "Informação e Comunicação",
      "63": "Informação e Comunicação",
      "64": "Atividades Financeiras, de Seguros e Serviços Relacionados",
      "65": "Atividades Financeiras, de Seguros e Serviços Relacionados",
      "66": "Atividades Financeiras, de Seguros e Serviços Relacionados",
      "67": "Atividades Financeiras, de Seguros e Serviços Relacionados",
      "68": "Atividades Imobiliárias",
      "69": "Atividades Profissionais, Científicas e Técnicas",
      "70": "Atividades Profissionais, Científicas e Técnicas",
      "71": "Atividades Profissionais, Científicas e Técnicas",
      "72": "Atividades Profissionais, Científicas e Técnicas",
      "73": "Atividades Profissionais, Científicas e Técnicas",
      "74": "Atividades Profissionais, Científicas e Técnicas",
      "75": "Atividades Profissionais, Científicas e Técnicas",
      "76": "Atividades Profissionais, Científicas e Técnicas",
      "77": "Atividades Administrativas e Serviços Complementares",
      "78": "Atividades Administrativas e Serviços Complementares",
      "79": "Atividades Administrativas e Serviços Complementares",
      "80": "Atividades Administrativas e Serviços Complementares",
      "81": "Atividades Administrativas e Serviços Complementares",
      "82": "Atividades Administrativas e Serviços Complementares",
      "83": "Atividades Administrativas e Serviços Complementares",
      "84": "Administração Pública, Defesa e Seguridade Social",
      "85": "Educação",
      "86": "Saúde Humana e Serviços Sociais",
      "87": "Saúde Humana e Serviços Sociais",
      "88": "Saúde Humana e Serviços Sociais",
      "89": "Saúde Humana e Serviços Sociais",
      "90": "Artes, Cultura, Esporte e Recreação",
      "91": "Artes, Cultura, Esporte e Recreação",
      "92": "Artes, Cultura, Esporte e Recreação",
      "93": "Artes, Cultura, Esporte e Recreação",
      "94": "Outras Atividades de Serviços",
      "95": "Outras Atividades de Serviços",
      "96": "Outras Atividades de Serviços",
      "97": "Serviços Domésticos",
      "98": "Serviços Domésticos",
      "99": "Organismos Internacionais e outras Instituições Extraterritoriais",
    },
    filters: undefined,
    filtered: undefined,
    search: {
      term: "",
      companies: undefined,
    },
  }),
  computed: {
    ...mapGetters({
      dataStatus: "empresas/dataStatus",
      companies: "empresas/companies",
      searchKeys: "empresas/searchKeys",
      cities: "empresas/cities",
      incubators: "empresas/incubators"
    }),
    searchTerm() {
      return this.search.term;
    },
    tabs() {
      return this.baseTabs.map((tab) => ({
        ...tab,
        subareas: tab.CNAECodes.map((code) => this.cnae[code])
          .filter((name, i, all) => {
            const index = all
              .sort((a, b) => b.localeCompare(a))
              .findIndex((n) => n === name);

            return i === index;
          })
          .sort((a, b) => a.localeCompare(b)),
      }));
    },
    baseItems() {
      return this.filtered !== undefined ? this.filtered : this.companies;
    },
    displayItems() {
      return this.search.companies !== undefined
        ? this.search.companies
        : this.baseItems;
    },
    reverseCNAEmap() {
      return Object.keys(this.cnae).reduce((rev, code) => {
        const name = this.cnae[code];

        if (rev[name] === undefined) {
          rev[name] = [];
        }

        rev[name].push(code);

        return rev;
      }, {});
    },
    groups() {
      return [
        { label: "Cidade", items: this.cities },
        { label: "Incubadora?", items: this.incubators },
      ];
    },
    globalSearchSelected() {
      if (this.$route.params.id)
        return this.displayItems.find(
          (item) => item.id === this.$route.params.id
        );
      return undefined;
    },
  },
  watch: {
    searchTerm() {
      this.pipeline();
    },
    filters() {
      this.pipeline();
    },
  },
  methods: {
    ...mapActions({
      setStrictResults: "global/setStrictResults",
      setFlexibleResults: "global/setFlexibleResults",
    }),
    filterData(context) {
      this.filtered = this.companies.filter((company) =>
        company.matchesFilter(context, this.baseTabs, this.reverseCNAEmap)
      );
    },
    async fuzzySearch() {
      this.setStrictResults();

      if (!this.search.term.trim()) {
        this.search.companies = undefined;
        return;
      }

      const term = this.$removeAccent(this.search.term.trim());

      let results = await this.$search(
        term,
        this.baseItems,
        this.$genFuzzyOptions(this.searchKeys, 0.0)
      );

      if (results.length === 0) {
        this.setFlexibleResults();

        results = await this.$search(
          term,
          this.baseItems,
          genFuzzyOptions(this.searchKeys)
        );
      }

      this.search.companies = results;
    },
    async pipeline() {
      if (this.filters) await this.filterData(this.filters);
      await this.fuzzySearch();
    },
  },
};
</script>
