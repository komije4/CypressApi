/// <reference types="Cypress" />

describe("Valida todos os metodos PUT da aplicação reqres.in", async () => {

    it("UPDATE", () => {
    
        cy.request({
            method: "PUT",
            delay: 500,
            url: `${Cypress.env("baseUrl")}api/users/2`,
            failOnStatusCode: true,
            headers: {
            },
            body: {
                "name": "morpheus",
                "job": "zion resident"
            },
        }).then((res) => {
            expect(res).to.have.property("status", 200);
        });
    });
});