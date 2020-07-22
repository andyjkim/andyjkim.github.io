/// <reference types="cypress" />

context('Homepage', () => {
  beforeEach(() => {
    cy.visit('http://pymetrics.com')
  })

  it('Login button', () => {
    cy.get('body > div.navbar.w-nav > div.container.large.horizontal.space-between > nav > div > div.nav-menu-buttons-wrapper > a.nav-link.small.w-nav-link').contains('Logout')
  })
})