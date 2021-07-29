/// <reference types="Cypress" />

describe("Valida todos os metodos GET da aplicação reqres.in", async () => {


  it("LIST USERS", () => {

    cy.request({
      method: "GET",
      delay: 500,
      url: `${Cypress.env("baseUrl")}api/users?page=2`,
      failOnStatusCode: true,
      headers: {
      },
    }).then((res) => {
      expect(res).to.have.property("status", 200);
    });
  });


  it("SINGLE USER", () => {

    cy.request({
      method: "GET",
      delay: 500,
      url: `${Cypress.env("baseUrl")}api/users/2`,
      failOnStatusCode: true,
      headers: {
      },
    }).then((res) => {
      expect(res).to.have.property("status", 200);
    });
  });

  it("SINGLE USER NOT FOUND", () => {

    cy.request({
      method: "GET",
      delay: 500,
      url: `${Cypress.env("baseUrl")}api/users/23`,
      failOnStatusCode: false,
      headers: {
      },
    }).then((res) => {
      expect(res).to.have.property("status", 404);
    });
  });

  it("LIST <RESOURCE>", () => {

    cy.request({
      method: "GET",
      delay: 500,
      url: `${Cypress.env("baseUrl")}api/unknown`,
      failOnStatusCode: true,
      headers: {
      },
    }).then((res) => {
      expect(res).to.have.property("status", 200);
    });
  });

  it("SINGLE <RESOURCE> NOT FOUND", () => {

    cy.request({
      method: "GET",
      delay: 500,
      url: `${Cypress.env("baseUrl")}api/unknown/23`,
      failOnStatusCode: false,
      headers: {
      },
    }).then((res) => {
      expect(res).to.have.property("status", 404);
    });
  });

  it("SINGLE <RESOURCE> NOT FOUND", () => {

    cy.request({
      method: "GET",
      delay: 500,
      url: `${Cypress.env("baseUrl")}api/users?delay=3`,
      failOnStatusCode: true,
      headers: {
      },
    }).then((res) => {
      expect(res).to.have.property("status", 200);
    });
  });
});