export class AddArtElements {
    addButton() {
    return cy.get("#btn-art-add");
    }
    createModal() {
    return cy.get("#add-data-modal");
    }
    nameField() {
    return cy.get("#artName");
    }
    typeField() {
    return cy.get("#artType");
    }
    imageLink() {
    return cy.get("#artLink");
    }
    descriptionField() {
    return cy.get("#artDescription");
    }
    saveButton() {
    return cy.get("#btn-art-add-save");
    }
    cancelButton() {
    return cy.get("#btn-art-add-cancel");
    }
    allertModal() {
    return cy.get(".swal2-modal");
    }
    allertConfirm() {
    return cy.get(".swal2-confirm");
    }
    }
    export const AddArt = new AddArtElements();
    
    
    export class DeleteArtElements {
    deleteButton() {
    return cy.get("#btn-delete-2");
    }
    deleteModal() {
    return cy.get("#delete-data-modal");
    }
    confirmButton() {
    return cy.get("#btn-art-delete-confirm");
    }
    cancelButton() {
    return cy.get("btn-art-delete-cancel");
    }
    allertModal() {
    return cy.get(".swal2-modal");
    }
    allertConfirm() {
    return cy.get(".swal2-confirm");
    }
    }
    export const DeleteArt = new DeleteArtElements();
    
    
    export class ViewArtElements {
    viewButton() {
    return cy.get("#btn-view-2");
    }
    viewModal() {
    return cy.get("#view-data-modal");
    }
    closeButton() {
    return cy.get("#btn-art-view-close");
    }
    }
    export const ViewArt = new ViewArtElements();
    
    
    export class GeneralArtElements {
    totalCount() {
    return cy.get("#total-count");
    }
    tableList() {
    return cy.get('.rdt_TableRow');
    }
    paginationLastPage() {
    return cy.get("#pagination-last-page");
    }
    }
    export const GeneralArt = new GeneralArtElements();