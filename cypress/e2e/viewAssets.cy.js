describe("View Art", () => {
  it("Visits the site", () => {
    cy.visit("https://eypbatihan-mintus-app.netlify.app/");
    cy.get(".rdt_TableRow").should("be.visible");
    cy.get("#btn-view-2").click();
    cy.get("#view-data-modal").should("be.visible");
    cy.get("#btn-art-view-close").click();
  });
});
