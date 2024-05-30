
export default class Report {

    reportMenu = "//div[@ng-reflect-nz-icon='file-text']";
    forgotPasswordMenu = "/html[1]/body[1]/terpel-app-root[1]/terpel-features[1]/nz-layout[1]/nz-layout[1]/nz-sider[1]/div[1]/nz-spin[1]/div[1]/terpel-sidebar[1]/ul[1]/nz-spin[1]/div[1]/li[6]/div[2]/ul[1]/li[1]/span[1]/a[1]";
    companyField = '.ant-select-selection-search-input';
    sevenDays = "/html[1]/body[1]/terpel-app-root[1]/terpel-features[1]/nz-layout[1]/nz-layout[1]/nz-content[1]/div[1]/terpel-driver-forgot-password-logs[1]/div[1]/div[1]/div[1]/terpel-report-filter-control[1]/div[1]/nz-radio-group[1]/label[1]";
    fifteenDays = "//body//terpel-app-root//label[2]";
    oneMonth = "//body//terpel-app-root//label[3]";
    oneYear = "//body//terpel-app-root//label[4]";
    filterIcon = "//thead//th[@id='3']//nz-filter-trigger";
    searchField = "/html[1]/body[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/nz-input-group[1]/input[1]";
    clickOk = "/html[1]/body[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/button[1]/span[1]";
    loginLogs = "/html[1]/body[1]/terpel-app-root[1]/terpel-features[1]/nz-layout[1]/nz-layout[1]/nz-sider[1]/div[1]/nz-spin[1]/div[1]/terpel-sidebar[1]/ul[1]/nz-spin[1]/div[1]/li[6]/div[2]/ul[1]/li[2]/span[1]/a[1]";

    clickReportMenu(){
        cy.xpath(this.reportMenu)
        .click();
    }

    clickDriverForgotPasswordSubMenu(){
        cy.xpath(this.forgotPasswordMenu)
          .click();
    }

    selectCompany(){
        cy.get(this.companyField)
          .should('be.visible') // Ensure it's visible
          .type('BIMBO DE PANAMÁ S.A.{enter}') // Type and press Enter
    }
    click7Days(){
      cy.xpath(this.sevenDays)
        .click();
    }
    click15Days(){
        cy.xpath(this.fifteenDays)
        .click();
    }
    click1Month(){
        cy.xpath(this.oneMonth)
        .click();
    }
    click1Year(){
        cy.xpath(this.oneYear)
          .click();
    }
    clickDriverForgotPasswordFilter(){
        cy.xpath(this.filterIcon)
          .click()
        cy.xpath(this.searchField)
          .type("SUCCESSFUL")
        cy.xpath(this.clickOk)
          .click();
    }

    clickDriverLoginLogs(){
        cy.xpath(this.loginLogs)
          .click();
    }
}

