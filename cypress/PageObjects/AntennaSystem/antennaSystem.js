class AntennaSystem {

    antennaSystemMenu = '/html[1]/body[1]/terpel-app-root[1]/terpel-features[1]/nz-layout[1]/nz-layout[1]/nz-sider[1]/div[1]/nz-spin[1]/div[1]/terpel-sidebar[1]/ul[1]/nz-spin[1]/div[1]/li[3]/div[1]/span[2]';
    controlBoxMenu = "/html[1]/body[1]/terpel-app-root[1]/terpel-features[1]/nz-layout[1]/nz-layout[1]/nz-sider[1]/div[1]/nz-spin[1]/div[1]/terpel-sidebar[1]/ul[1]/nz-spin[1]/div[1]/li[3]/div[2]/ul[1]/li[1]/span[1]/a[1]";
    addNewControlBox = '/html[1]/body[1]/terpel-app-root[1]/terpel-features[1]/nz-layout[1]/nz-layout[1]/nz-content[1]/div[1]/terpel-control-box-list[1]/nz-spin[1]/div[1]/terpel-list-table[1]/div[1]/div[1]/div[2]/button[1]/span[1]';
    description = "#description";
    ip = "#ip";
    port = "#port";
    clickSiteField = "/html/body/terpel-app-root/terpel-features/nz-layout/nz-layout/nz-content/div/terpel-control-box-editor/nz-spin/div/div/form/div[2]/div[4]";
    selectSite = 'nz-select-search.ant-select-selection-search[ng-reflect-show-input="true"]';
    clickTerminalCodeField = "nz-select[name='terminalCode']";
    selectedTerminal = "//div//nz-option-item[2]";
    saveBtn = 'button[nz-button][type="submit"]';
    lockIcon = "//tbody/tr[1]//td[6]//div//a[2]";
    confirmStatus = 'button[nz-button].ant-btn-primary';
    deleteIcon = "//tbody/tr[1]//td[6]//div//a[4]";
    deleteConfirm = 'button[nz-button].ant-btn-primary';
    antennaMenu = "li[title='Antennas'] a"
    addNewAntenna = 'button[ng-reflect-router-link="/app/antenna-system/antenna/ad"]';
    clickControlBox = "nz-select[name='controlBoxCode']";
    selectControlBox = 'div nz-option-item';
    antennaDescription = "#antennaDescription";
    dispenserNumber = "#dispenserNumber";
    languageDropdown = "/html[1]/body[1]/terpel-app-root[1]/terpel-features[1]/nz-layout[1]/terpel-header[1]/nz-header[1]/div[1]/div[3]/div[1]/terpel-translate-change[1]/div[1]/span[1]";
    englishLanguageDropdown = "/html[1]/body[1]/div[1]/div[2]/div[1]/div[1]/ul[1]/li[1]/span[1]";

    changeSpanishToEnglish(){
        cy.xpath(this.languageDropdown).click();
        cy.wait(1000);
        cy.xpath(this.englishLanguageDropdown).click();
    }

    clickAntennaSystemMenu() {
        cy.xpath(this.antennaSystemMenu).click();
    }
    clickControlBoxSubMenu() {
        cy.xpath(this.controlBoxMenu).click();
    }
    clickAddNewControlBox() {
        cy.xpath(this.addNewControlBox).click();
    }
    setDescription(description) {
        cy.get(this.description).type(description)
    }
    setIP(ip) {
        cy.get(this.ip).type(ip)
    }
    setPort(port) {
        cy.get(this.port).type(port)
    }
    selectSite() {
        cy.xpath(this.clickSiteField).click();
        cy.get(this.selectSite)
            .type("UNI02 - Unipet Test Lab Main{enter}")
    }
    selectTerminalCode(){
        cy.get(this.clickTerminalCodeField).click();
        cy.xpath(this.selectedTerminal).click();
    }
    clickSave(){
        cy.get(this.saveBtn)
            .should('be.visible') // Ensure the button is visible
            .click();
    }
    clickLockIcon(){
        cy.xpath(this.lockIcon).click();
        cy.get(this.confirmStatus)
            .should('be.visible') // Ensure the button is visible
            .click();
    }
    deleteControlBox(){
        cy.xpath(this.deletIcon).click();
        cy.get(this.deleteConfirm)
            .should('be.visible') // Ensure the button is visible
            .click();
    }

    clickAntennasSubMenu() {
        cy.get(this.antennaMenu).click();
    }
    clickAddNewAntenna() {
        cy.get(this.addNewAntenna)
            .should('be.visible') // Ensure the button is visible
            .click();
    }
    selectControlBox() {
        cy.get(this.clickControlBox).click();
        cy.get(this.selectControlBox).eq(3) // Target the element at index 0
            .should('be.visible')
            .click();
    }
    setAntennaDescription(description){
        cy.get(this.antennaDescription).type(description)
    }
    setDispenserNumber(number){
        cy.get(this.dispenserNumber).type(number)
    }
}

export default AntennaSystem