import AntennaSystem from "../../PageObjects/AntennaSystem/antennaSystem.js";
const faker = require('faker');

describe("Antenna System Test", () => {
    const antenna_system = new AntennaSystem();

    beforeEach(()=>{
        cy.fixture('credential').then((user) => {
            cy.login(user.username, user.password, user.url);
          });
        antenna_system.changeSpanishToEnglish();
    })

    it("Test Add New Control Box", () => {
        antenna_system.clickAntennaSystemMenu();
        antenna_system.clickControlBoxSubMenu();
        cy.wait(2000);
        antenna_system.clickAddNewControlBox();
        antenna_system.setDescription(faker.lorem.sentence(7));
        antenna_system.setIP(faker.internet.ip());
        cy.wait(1000);
        antenna_system.setPort(faker.internet.port());
        cy.wait(1000);
        antenna_system.selectSite();
        // cy.wait(1000);
        // antenna_system.clickSave();
        cy.wait(3000)
    })

    // it("Test Add New Antenna", () => {
    //     antenna_system.clickAntennaSystemMenu();
    //     antenna_system.clickAntennasSubMenu();
    //     antenna_system.clickAddNewAntenna();
    //     antenna_system.selectControlBox();
    //     antenna_system.setAntennaDescription(faker.lorem.sentence(7));
    //     // antenna_system.setDispenserNumber(faker.location.buildingNumber())
    //     antenna_system.clickSave();
    //     cy.wait(3000);
    // })

    // it("Status Change of Control Box", () => {
    //     antenna_system.clickAntennaSystemMenu();
    //     antenna_system.clickControlBoxSubMenu();
    //     antenna_system.clickLockIcon();
    //     cy.wait(3000);
    // })

    // it("Delete Control Box", () => {
    //
    //     antenna_system.clickAntennaSystemMenu();
    //     antenna_system.clickControlBoxSubMenu();
    //     antenna_system.deleteControlBox();
    //     cy.wait(3000);
    // })

    // it("Status Change of Antenna System", () => {
    //
    //     antenna_system.clickAntennaSystemMenu();
    //     antenna_system.clickAntennasSubMenu();
    //     antenna_system.clickLockIcon();
    //     cy.wait(3000);
    // })

    // it("Delete Antennas", () => {
    //
    //     antenna_system.clickAntennaSystemMenu();
    //     antenna_system.clickAntennasSubMenu();
    //     antenna_system.deleteControlBox();
    //     cy.wait(3000);
    // })

    afterEach(()=>{
        cy.wait(1000);
        cy.logout();
    })

})