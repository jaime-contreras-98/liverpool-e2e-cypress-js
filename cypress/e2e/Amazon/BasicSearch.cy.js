/// <reference types="Cypress" />

describe("Amazon webpage tests", () => {

    beforeEach(() => {
        cy.fixture("example").then(function (data) {
            this.data = data;
        });
        cy.visit("https://todoist.com");
    });

    it("Basic login with steps", function () {
        cy.get("li > a[href='/auth/login']").click()
        cy.get("#element-0").type("Hola@gmail.com")
        cy.get("#element-3").type("Hola123")
        cy.get("[data-gtm-id='start-email-login']").click()
    });

    it.skip("Basic login via API", function () {
        cy.get("#twotabsearchtextbox").type(this.data.productPs5)
        cy.get("#nav-search-submit-button").click()
        cy.get(".sg-col-inner > a > div > span").should("contain.text", this.data.productPs5)
    });


})