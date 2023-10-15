import { AddArt, GeneralArt } from '../support/elements.js';

describe("Create Art Tests", () => {
beforeEach(() => {
cy.visit('/');
});
it("check create art modal", () => {
// check add button and click
AddArt.addButton().should('be.visible').click();

// check modal
AddArt.createModal().should('be.visible');

// check fields
AddArt.createModal().find('label').eq(0).should('contain', 'Name *')
AddArt.createModal().find('label').eq(1).should('contain', 'Type *')
AddArt.createModal().find('label').eq(2).should('contain', 'Image Link (Optional)')
AddArt.createModal().find('label').eq(3).should('contain', 'Description *')

//check buttons
AddArt.saveButton().should('be.visible').and('contain', 'Save');
AddArt.cancelButton().should('be.visible').and('contain', 'Cancel');
});
it("create one art and check the table list", () => {
// click add button
AddArt.addButton().click();

// create one art with mandatory fields
AddArt.nameField().type('Test Adı');
AddArt.nameField().should('have.value', 'Test Adı');
AddArt.typeField().select('Pictorial Art');
cy.contains('Pictorial Art').should('be.visible');
AddArt.descriptionField().type('Test Açıklaması');
AddArt.descriptionField().should('have.value', 'Test Açıklaması');

// save the art
AddArt.saveButton().click();

//check the alert
AddArt.allertModal().should('be.visible');
AddArt.allertConfirm().click();

// check the table list
GeneralArt.paginationLastPage().click();
GeneralArt.tableList().contains('Test Adı').should('be.visible');
GeneralArt.tableList().contains('pictorial art').should('be.visible');
GeneralArt.tableList().contains('Test Açıklaması').should('be.visible');
});
});