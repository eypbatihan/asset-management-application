import { ViewArt} from '../support/elements.js';

describe("Create Art Tests", () => {
beforeEach(() => {
cy.visit('/');
});
it("check view art modal", () => {
// check view button and click
ViewArt.viewButton().click();

// check modal
ViewArt.viewModal().should('be.visible');

//close modal
ViewArt.closeButton().click();
});})
