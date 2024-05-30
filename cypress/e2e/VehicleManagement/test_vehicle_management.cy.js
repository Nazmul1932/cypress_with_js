import VehicleManagement from "../../PageObjects/VehicleManagement/vehicle_management"

describe("Vehicle Management", () => {
    const vehicle_management = new VehicleManagement();

    beforeEach(()=>{
        cy.fixture('credential').then((user) => {
            cy.login(user.username, user.password, user.url);
          });
    })

    afterEach(()=>{
        cy.logout();
    })

    it("Downlaod excel file of decal information", () => {
        vehicle_management.clickVehicleManagementMenu();
        vehicle_management.clickVehicleListSubMenu();
        cy.wait(3000)
        vehicle_management.selectCompany();
        cy.wait(3000)
        vehicle_management.clickAddBulkDecalInfo();
        cy.wait(3000)
    })

    it("Uplaod excel file",()=>{
        vehicle_management.clickVehicleManagementMenu();
        vehicle_management.clickVehicleListSubMenu();
        cy.wait(3000)
        vehicle_management.selectCompany();
        cy.wait(3000)
        vehicle_management.uploadExcelFile();

    })
})