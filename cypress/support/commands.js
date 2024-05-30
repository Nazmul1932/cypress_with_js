
Cypress.Commands.add('login', (username, password, url) => {

    cy.visit(`${url}`)
    cy.get("#input-userName").type(username);
    cy.get("#input-password").type(password);
    cy.get("span[class='ng-star-inserted']").click();
    cy.wait(2000);
    cy.url().should('include', '/dashboard');
});

Cypress.Commands.add('logout',() => {
    cy.get("img[alt='Profile']").click();
    cy.wait(1000)
    cy.get("div[class='cdk-overlay-container'] li:nth-child(3) span:nth-child(1)").click();

})
