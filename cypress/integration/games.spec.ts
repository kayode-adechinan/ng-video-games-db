/// <reference types="cypress" />

describe("Games Tests", () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit("http://localhost:4200/");
  });

  it("should have search field", () => {
    expect(true).to.equal(true);
    cy.get(".search-input").should("be.visible");
  });

  it("should have search button", () => {
    expect(true).to.equal(true);
    cy.get(".search-button").should("be.visible");
  });

  it("should have select filter", function () {
    cy.get(".mat-select-placeholder").should("be.visible");
  });
});
