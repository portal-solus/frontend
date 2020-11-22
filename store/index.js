export const actions = {
  async nuxtServerInit({ commit }) {
    const resp = await fetch("http://157.245.90.43:3000/Companies");
    const companies = await resp.json();

    commit(
      "empresas/setCompanies",
      companies
        .sort((a,b) => a.name.localeCompare(b.name))
    );
  }
}
