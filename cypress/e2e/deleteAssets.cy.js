import { DeleteArt, GeneralArt } from '../support/elements.js';

describe("Create Art Tests", () => {
beforeEach(() => {
cy.visit('/');
});
it("check delete art modal", () => {
// check delete button and click
DeleteArt.deleteButton().click();

// check modal
DeleteArt.deleteModal().should('be.visible');

//keep the starting number of total art count 
GeneralArt.totalCount().invoke("val").as("startingNumber");

// delete modal confirm click
DeleteArt.confirmButton().click();

//alert check
DeleteArt.allertModal().should('be.visible');
DeleteArt.allertConfirm().click();

//keep the current number of total art count 
GeneralArt.totalCount().invoke("val").as("currentNumber");

//check the startingNumber and currentNumber
cy.get("@startingNumber").should("not.equal", "@currentNumber");
});})

