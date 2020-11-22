describe("Home", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should display the main headline", () => {
    cy.get("[data-cy=solus-logo]")
  })
});
