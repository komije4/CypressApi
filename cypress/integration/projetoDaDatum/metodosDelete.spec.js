/// <reference types="Cypress" />

describe("Valida todos os metodos DELETE da aplicação reqres.in", async () => {

    it("DELETE", () => {
    
        cy.request({
            method: "DELETE",
            delay: 500,
            url: `${Cypress.env("baseUrl")}api/users/2`,
            failOnStatusCode: true,
            headers: {
            },
            body: {
            },
        }).then((res) => {
            expect(res).to.have.property("status", 204);
        });
    });
});