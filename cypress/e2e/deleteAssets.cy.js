describe("Delete Art", () => {
  it("Visits the site", () => {
    cy.visit("https://eypbatihan-mintus-app.netlify.app/");
    cy.get('.rdt_TableRow').should('be.visible');
    cy.get("#total-count").invoke("val").as("baslangicSayisi"); 
    cy.get("#btn-delete-2").click();
    cy.get('#delete-data-modal').should('be.visible');
    cy.get("#btn-art-delete-confirm").click();
    cy.get('.swal2-modal').should('be.visible');
    cy.get(".swal2-confirm").click();
    cy.get("#total-count").invoke("val").as("yeniSayi");
    cy.get("@baslangicSayisi").should("not.equal", "@yeniSayi");
  });
});
