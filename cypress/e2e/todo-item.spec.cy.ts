describe("Todo items", () => {
  beforeEach(() => {
    cy.setDataAndVisit();
  })

  it("Properly displays comleted item", () => {
    cy.get('.app__todo-item')
    .filter('.app__todo-item_completed')
    .should('have.length', 1)
    .and('contain', 'Buy milk')
    .find('input[type="checkbox"]')
    .should('be.checked');
  })

  it("Remove an item", () => {
    cy.get(".app__todo-item").as('list');

     cy.get('@list')
     .first()
     .find('button')
     .click()

     cy.get('@list')
     .should('have.length', 2)
     .and('not.contain', 'Buy bread')
  })

  it('Marks an incomplete item completet', () => {
    cy.get(".app__todo-item")
    .first()
    .as('first-todo')

    cy.get('@first-todo')
    .find('.app__todo-item-checkbox')
    .click()
    .find('input[type="checkbox"]')
    .should('be.checked');

    cy.get('@first-todo')
    .should('have.class', 'app__todo-item_completed')
  })
})
