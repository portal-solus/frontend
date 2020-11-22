describe("Empresas", () => {
  beforeEach(() => {
    cy.visit("/empresas");
    cy.wait(2000)
  })

  it("should disable button click when company doesn't have a website", () => {
    cy.get("#search-bar").type("CLINICA BOM CLIMA", { delay: 75 });

    cy.wait(1000)

    cy.get("#display-data .v-item-group").click()

    cy.get("#display-data button.white--text").should('be.disabled')
  })

  it("should able button click when company has a website", () => {
    cy.get("#search-bar").type("Clínica Atlas", { delay: 75 });

    cy.wait(1000)

    cy.get("#display-data .v-item-group").click()

    cy.get("#display-data button.white--text").should('not.be.disabled')
  })
})
