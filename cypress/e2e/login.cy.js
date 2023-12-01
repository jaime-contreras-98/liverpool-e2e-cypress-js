/// <reference types="Cypress" />

describe("Login tests for Todoist webpage", function () {

    beforeEach(function () {
        cy.fixture("constants").then(function (data) {
            this.data = data;
        });

        cy.visit("");
        cy.get("li > a[href*='login']").click();
    });

    it.skip("Negative login wrong credentials", function () {
        cy.login("Hola@gmail.com", "Hello!");

        cy.get("form > div:nth-child(1)").should("have.text", this.data.error_msg.wrong_usr);
    });

    it.skip("Negative login empty password", function () {
        cy.login("Hola@gmail.com");

        cy.get("#element-5").should("have.text", this.data.error_msg.no_pwrd);
    });

    it.skip("Positive login", function () {
        cy.login(Cypress.env("loginUser"), Cypress.env("loginPass"));

        cy.get("button[id]").should("be.visible");
    });

    it("Positive login JWT payload", function () {
        /*cy.request("POST", "https://app.todoist.com/API/v9.1/user/login", {
            email: Cypress.env("loginUser"), password: Cypress.env("loginPass")
        });
        */
        cy.request({
            method: 'POST',
            url: 'https://app.todoist.com/API/v9.1/user/login',
            headers: {
                "Doist-Platform": "web"
            }, body: {
                email: Cypress.env("loginUser"),
                password: Cypress.env("loginPass")
            }
        }).then(function () {
            cy.visit("https://feat-flags.todoist.net/api/v1/identities/")
        });
    });


});