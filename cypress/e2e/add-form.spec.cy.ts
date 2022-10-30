describe("Add form", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Add btn disabled when input value is empty string", () => {
    cy.get(".app__add-form-btn").should("be.disabled");
  });

  it("Add btn undisabled when the input has a value", () => {
    cy.get(".app__add-form-input").type("something");
  });

  context("Form submission", () => {
    it("Add new todo on enter", () => {
      const testValue = "buy milk";

      cy.get(".app__add-form-input").type(testValue).type("{enter}").should("have.value", "");

      cy.get(".app__todo-item").should("have.length", 1).and("contain", testValue);
    });

    it("Add new todo on click add btn", () => {
      const testValue = "buy milk";

      cy.get(".app__add-form-input").type(testValue);

      cy.get(".app__add-form-btn").click();

      cy.get(".app__add-form-input").should("have.value", "");

      cy.get(".app__todo-item").should("have.length", 1).and("contain", testValue);
    });
  });
});
