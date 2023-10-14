describe("Create Art", () => {
  it("Visits the site", () => {
    cy.visit("https://eypbatihan-mintus-app.netlify.app/");
    cy.get("#btn-art-add").click();
    cy.get('#add-data-modal').should('be.visible');
    cy.get('#artName').type('Test Adı');
    cy.get('#artName').should('have.value', 'Test Adı');
    cy.get('#artType').select('Pictorial Art');
    cy.contains('Pictorial Art').should('be.visible');
    cy.get('#artDescription').type('Test Açıklaması');
    cy.get('#artDescription').should('have.value', 'Test Açıklaması');
    cy.get("#btn-art-add-save").click();
    cy.get('.swal2-modal').should('be.visible');
    cy.get(".swal2-confirm").click();
    cy.get("#pagination-last-page").click();
    cy.get('.rdt_TableRow').contains('Test Adı').should('be.visible');
    cy.get('.rdt_TableRow').contains('pictorial art').should('be.visible');
    cy.get('.rdt_TableRow').contains('Test Açıklaması').should('be.visible');
  });
});
