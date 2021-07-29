/// <reference types="Cypress" />

describe("Valida todos os metodos POST da aplicação reqres.in", async () => {

    it("CREATE", () => {

        cy.request({
            method: "POST",
            delay: 500,
            url: `${Cypress.env("baseUrl")}api/users`,
            failOnStatusCode: true,
            headers: {
            },
            body: {
                "name": "morpheus",
                "job": "leader"
            },
        }).then((res) => {
            expect(res).to.have.property("status", 201);
        });
    });

    it("REGISTER - SUCCESSFUL", () => {

        cy.request({
            method: "POST",
            delay: 500,
            url: `${Cypress.env("baseUrl")}api/register`,
            failOnStatusCode: true,
            headers: {
            },
            body: {
                "email": "eve.holt@reqres.in",
                "password": "pistol"
            },
        }).then((res) => {
            expect(res).to.have.property("status", 200);
        });
    });

    it("REGISTER - UNSUCCESSFUL", () => {

        cy.request({
            method: "POST",
            delay: 500,
            url: `${Cypress.env("baseUrl")}api/register`,
            failOnStatusCode: false,
            headers: {
            },
            body: {
                "email": "sydney@fife"
            },
        }).then((res) => {
            expect(res).to.have.property("status", 400);
        });
    });

    it("LOGIN - SUCCESSFUL", () => {

        cy.request({
            method: "POST",
            delay: 500,
            url: `${Cypress.env("baseUrl")}api/login`,
            failOnStatusCode: true,
            headers: {
            },
            body: {
                "email": "eve.holt@reqres.in",
                "password": "cityslicka"
            },
        }).then((res) => {
            expect(res).to.have.property("status", 200);
        });
    });

    it("LOGIN - UNSUCCESSFUL", () => {

        cy.request({
            method: "POST",
            delay: 500,
            url: `${Cypress.env("baseUrl")}api/login`,
            failOnStatusCode: false,
            headers: {
            },
            body: {
                "email": "peter@klaven"
            },
        }).then((res) => {
            expect(res).to.have.property("status", 400);
        });
    });
});