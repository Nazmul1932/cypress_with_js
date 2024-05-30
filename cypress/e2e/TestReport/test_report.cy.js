import Report from "../../PageObjects/Report/report";

describe("Report Filtering Testing", ()=> {

    const report = new Report();

    beforeEach(()=>{
        cy.fixture('credential').then((user) => {
            cy.login(user.username, user.password, user.url);
          });
    })
    afterEach(()=>{
        cy.logout();
    })

    it("Test Driver Forgot Password", ()=>{
        report.clickReportMenu();
        report.clickDriverForgotPasswordSubMenu();
        report.selectCompany();
        report.click7Days();
        cy.wait(2000)
        report.click15Days();
        cy.wait(2000)
        report.click1Month();
        cy.wait(2000)
        report.click1Year();
        cy.wait(2000)
    })
    it("Test Driver Forgot Password Filter By Failed/SUCCESSFUL", ()=>{
        report.clickReportMenu();
        report.clickDriverForgotPasswordSubMenu();
        report.selectCompany();
        cy.wait(2000)
        report.clickDriverForgotPasswordFilter();
        cy.wait(2000)
    })
    it("Test Driver Login Logs", ()=>{
        report.clickReportMenu();
        report.clickDriverLoginLogs();
        report.selectCompany();
        
    })

})