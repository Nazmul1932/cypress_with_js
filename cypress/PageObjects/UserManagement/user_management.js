const faker = require('faker');

class UserManagement {
    user_management = "/html[1]/body[1]/terpel-app-root[1]/terpel-features[1]/nz-layout[1]/nz-layout[1]/nz-sider[1]/div[1]/nz-spin[1]/div[1]/terpel-sidebar[1]/ul[1]/nz-spin[1]/div[1]/li[2]/div[1]/span[2]";
    driver_user = "li[title='Driver Users'] a"
    company_dropdown = ".ant-select-selection-search-input"
    profile = "img[alt='Profile']"
    logout = "div[class='cdk-overlay-container'] li:nth-child(3) span:nth-child(1)"
    admin_users_menu = "/html[1]/body[1]/terpel-app-root[1]/terpel-features[1]/nz-layout[1]/nz-layout[1]/nz-sider[1]/div[1]/nz-spin[1]/div[1]/terpel-sidebar[1]/ul[1]/nz-spin[1]/div[1]/li[2]/div[2]/ul[1]/li[1]/span[1]/a[1]"
    add_new_user_btn = "button[class='ant-btn btn btn-secondary btn-round btn-sm mr-2 ng-star-inserted'] span[class='ng-star-inserted']"
    first_name = "/html[1]/body[1]/terpel-app-root[1]/terpel-features[1]/nz-layout[1]/nz-layout[1]/nz-content[1]/div[1]/terpel-user-management[1]/terpel-user-form[1]/nz-spin[1]/div[1]/form[1]/div[1]/div[1]/terpel-text-input[1]/nz-form-item[1]/nz-form-control[1]/div[1]/div[1]/input[1]"
    last_name = "terpel-beta-text-input[formcontrolname='lastName']"
    email = "/html[1]/body[1]/terpel-app-root[1]/terpel-features[1]/nz-layout[1]/nz-layout[1]/nz-content[1]/div[1]/terpel-user-management[1]/terpel-user-form[1]/nz-spin[1]/div[1]/form[1]/div[1]/div[3]/nz-form-item[1]/nz-form-control[1]/div[1]/div[1]/input[1]"
    phone_number = "/html[1]/body[1]/terpel-app-root[1]/terpel-features[1]/nz-layout[1]/nz-layout[1]/nz-content[1]/div[1]/terpel-user-management[1]/terpel-user-form[1]/nz-spin[1]/div[1]/form[1]/div[1]/nz-form-item[1]/nz-form-control[1]/div[1]/div[1]/nz-input-group[1]/span[1]/input[1]"
    state = "nz-select[name='stateId']"
    city = "nz-select[name='cityId']"
    address = "/html[1]/body[1]/terpel-app-root[1]/terpel-features[1]/nz-layout[1]/nz-layout[1]/nz-content[1]/div[1]/terpel-user-management[1]/terpel-user-form[1]/nz-spin[1]/div[1]/form[1]/div[1]/div[5]/div[1]/div[3]/terpel-text-input[1]/nz-form-item[1]/nz-form-control[1]/div[1]/div[1]/input[1]"
    roles = "//nz-select[@name='roles']"
    save = "/html[1]/body[1]/terpel-app-root[1]/terpel-features[1]/nz-layout[1]/nz-layout[1]/nz-content[1]/div[1]/terpel-user-management[1]/terpel-user-form[1]/nz-spin[1]/div[1]/form[1]/div[3]/button[2]"
    lockIcon = "//tbody/tr[1]/td[5]/div[1]/a[2]"
    deleteIcon = "//tbody/tr[1]/td[5]/div[1]/a[4]"
    editIcon = "//tbody/tr[1]/td[5]/div[1]/a[3]"
    updateButton = 'button.ant-btn.btn-secondary.btn-min.ant-btn-lg'
    selectedRole = "//nz-select-search[@ng-reflect-mirror-sync='true']"
    selectedState = "//div//nz-option-item[9]"
    selectedCity = "//div//nz-option-item[2]"

    clickUserManagement(){
        cy.xpath(this.user_management).click();
    }
    clickDriverUsers(){
        cy.get(this.driver_user).click();
    }
    selectCompany(company){
        cy.get(this.company_dropdown).click();
        cy.get("nz-select-search.ant-select-selection-search.ng-star-inserted").type(company + '{enter}');
        cy.get('div.undefined.ng-star-inserted')
            .should('contain', 'Driver');
    }
    clickLogout(){
        cy.get(this.profile).click();
        cy.wait(1000)
        cy.get(this.logout).click();
    }
    clickAdminUsersMenu(){
        cy.xpath(this.admin_users_menu).click()
    }
    clickAddNewBtn(){
        cy.get(this.add_new_user_btn).click();
    }
    setFirstName(firstName){
        cy.xpath(this.first_name).type(firstName)
    }
    setLastName(lastName){
        cy.get(this.last_name).type(lastName)
    }
    setEmail(email){
        cy.xpath(this.email).type(email)
    }
    setPrimaryPhoneNumber(primaryPhoneNumber){
        cy.xpath(this.phone_number).type(primaryPhoneNumber)
    }
    selectState(){
        cy.get(this.state).click();
        cy.xpath(this.selectedState).click()
    }
    selectCity(){
        cy.get(this.city).click();
        cy.xpath(this.selectedCity).click()
    }
    setPrimaryAddress(){
        cy.xpath(this.address).type("DU");
    }
    selectRole(){
        cy.xpath(this.roles).click();
        cy.xpath(this.selectedRole).type("Admin{enter}")
    }
    clickSave(){
        cy.xpath(this.save).click();
    }
    clickLockIcons(){
        cy.xpath(this.lockIcon).click();
        cy.get('button.ant-btn.ant-btn-primary').contains('Yes').click();
    }
    clickDeleteIcon(){
        cy.xpath(this.deleteIcon).click();
        cy.get('button.ant-btn.ant-btn-primary').contains('Yes').click();
    }
    clickEditIcon(){
        cy.xpath(this.editIcon).click();
    }
    clickFleetUser(){
        cy.get("li[title='Fleet Users'] a").click();
    }
    selectCustomer(){
        cy.get("nz-select[name='customerCode']").click()
        cy.wait(2000);
        cy.get("nz-select-search[ng-reflect-focus-trigger='true']").type("UNIPET Company Limited{enter}")
    }
}
export default UserManagement