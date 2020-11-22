export const state = () => ({
  companies: [],
  keys: [
    "inspect.name",
    "inspect.descriptionLong",
    "inspect.services",
    "inspect.technologies",
  ],
  incubators: [
    "Direto para o Mercado",
    "CIETEC – Centro de Inovação, Empreendedorismo e Tecnologia",
    "ESALQTec – Incubadora de Empresas Agrozootécnicas de Piracicaba",
    "HABITs – Habitat de Inovação Tecnológica e Social/Incubadora-Escola",
    "INOVA-HC",
    "InovaLab@POLI",
    "ParqTec – Fundação Parque Tecnológico de São Carlos",
    "Parque Tecnológico Univap",
    "Pqtec – Parque Tecnológico São José dos Campos",
    "Supera – Incubadora de Empresas de Base Tecnológica de Ribeirão Preto",
  ]
});

export const getters = {
  companies: (s) => s.companies,
  searchKeys: (s) => s.keys,
  incubators: (s) => s.incubators,
  cities: (s) => {
    const cities = s.companies.reduce((all, company) => {
      return all.concat(company.city);
    }, []);

    const citiesSet = cities
      .filter((city) => city)
      .map((city) => city.trim())
      .filter((city) => city.length > 0)
      .reduce((set, city) => {
        if (!set[city]) {
          set[city] = city;
        }

        return set;
      }, {});

    return Object.keys(citiesSet).sort();
  },
};

export const mutations = {
  setCompanies: (s, newCompanies) => (s.companies = newCompanies)
};
