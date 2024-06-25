import UserManagement from "../../PageObjects/UserManagement/user_management";
import AntennaSystem from "../../PageObjects/AntennaSystem/antennaSystem";
const faker = require('faker');

describe("User Management Tests", () => {
    const user_management = new UserManagement();
    const antenna_system = new AntennaSystem();

    
    beforeEach(()=>{
        cy.fixture('credential').then((user) => {
            cy.login(user.username, user.password, user.url);
          });
        antenna_system.changeSpanishToEnglish();
        user_management.clickUserManagement();
        cy.log("Click User Management Successful")
    })
   
    it("Test Add New Admin User", () => {
        user_management.clickAdminUsersMenu();
        cy.url().should('include', '/user-management/admin-users');
        user_management.clickAddNewBtn()
        user_management.setFirstName(faker.name.firstName());
        user_management.setEmail(faker.internet.email());
        user_management.setPrimaryPhoneNumber("11111111");
        cy.wait(2000);
        user_management.setPrimaryAddress();
        user_management.selectRole();
        user_management.clickSave();
        cy.wait(3000);
    })
     it("Test Filter Driver User", () => {
        cy.log("Click Driver Users")
        user_management.clickDriverUsers();
        cy.wait(2000);
        cy.url().should('include', '/user-management/driver-users');
        cy.log("Select Company")
        user_management.selectCompany("UNIPET Company Limited");
        cy.log("Filter Driver user by Admin Done")
    })
    it("Test Status Change of Admin User", () => {
        user_management.clickAdminUsersMenu();
        user_management.clickLockIcons();
        cy.wait(3000);
    })
    it("Test Deletion of Admin User", () => {
        user_management.clickAdminUsersMenu();
        user_management.clickDeleteIcon();
        cy.wait(3000);
    })
    it("Test Add New Fleet User", () => {
        user_management.clickAdminUsersMenu();
        user_management.clickFleetUser();
        user_management.clickAddNewBtn()
        user_management.setFirstName(faker.name.firstName());
        user_management.setLastName(faker.name.lastName());
        user_management.setEmail(faker.internet.email());
        user_management.setPrimaryPhoneNumber("11111185");
        user_management.selectState();
        cy.wait(2000);
        user_management.selectCity();
        user_management.setPrimaryAddress();
        user_management.selectCustomer();
        user_management.selectRole();
        user_management.clickSave();
        cy.wait(3000);
    })
    afterEach(()=>{
        user_management.clickLogout()
    })
});
