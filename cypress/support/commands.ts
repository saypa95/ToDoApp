/// <reference types="cypress" />
Cypress.Commands.add('setDataAndVisit', () => {
  const todos = [
    {
      id: "abcd-123",
      title: "Buy bread",
      complete: false,
    },
    {
      id: "abcd-1234",
      title: "Buy eggs",
      complete: false,
    },
    {
      id: "abcd-12345",
      title: "Buy milk",
      complete: true,
    },
  ];

  window.localStorage.setItem("todos", JSON.stringify(todos));

  cy.visit('/')
})