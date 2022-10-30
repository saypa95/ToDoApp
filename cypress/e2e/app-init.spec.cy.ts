describe("App init", () => {
  it("Load list from local storage", () => {
    cy.setDataAndVisit();

    cy.get(".app__todo-item").should('have.length', 3)
  });
});