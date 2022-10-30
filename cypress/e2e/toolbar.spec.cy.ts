describe("Toolbar", () => {
  beforeEach(() => {
    cy.setDataAndVisit();
  });

  it("Filters to active todos", () => {
    cy.contains("Active").click();

    cy.get(".app__todo-item").should("have.length", 2);
  });

  it("Filters to comleted todos", () => {
    cy.contains("Completed").click();

    cy.get(".app__todo-item")
    .should("have.length", 1)
    .first()
    .should("have.class", "app__todo-item_completed");
  });

  it.only("Clear all complete todos", () => {
    cy.contains("Clear completed").click();

    cy.get(".app__todo-item")
    .should("have.length", 2)

    cy.contains("Completed").click();
    cy.get(".app__todo-item")
    .should("have.length", 0)
  })
});
