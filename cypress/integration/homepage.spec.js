/// <reference types="cypress" />

context('Homepage', () => {
  beforeEach(() => {
    cy.visit('http://andyjkim.com')
  })

  it('job title', () => {
    cy.get('#header > div > div > p').contains('Test Automation Engineer')
  })
})