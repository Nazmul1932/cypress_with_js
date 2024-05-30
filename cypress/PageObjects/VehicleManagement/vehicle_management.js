import 'cypress-file-upload';



class VehicleManagement{

    clickVehicleManagementMenu(){
        cy.get("li[title='Vehicle Management']").click();
    }
    clickVehicleListSubMenu(){
        cy.get("li[title='Vehicle List'] a").click();
    }

    selectCompany(){
        cy.get('.ant-select-selection-search-input')
            .should('be.visible') // Ensure it's visible
            .type('UNIPET Company Limited{enter}') // Type and press Enter
    }

    clickAddBulkDecalInfo(){
        cy.get('button[ng-reflect-ng-class="btn-secondary"]')
            .should('contain', 'Add Decal Info (Bulk)')
            .click();
        cy.xpath("//terpel-decal-info-bulk-upload//h3//i").click();
    }

    uploadExcelFile(){
        cy.get('button[ng-reflect-ng-class="btn-secondary"]')
            .should('contain', 'Add Decal Info (Bulk)')
            .click();
        cy.get('label.custom-file-upload').click();
        cy.fixture('Decal_Information_File.xlsx', 'binary')
            .then((fileContent) => {
                cy.get('input[type="file"]')
                    .attachFile({
                        fileContent,
                        fileName: 'Decal_Information_File.xlsx',
                        mimeType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                    });
            });

    }

}

export default VehicleManagement