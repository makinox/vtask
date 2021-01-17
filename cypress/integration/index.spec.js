/// <reference types="cypress" />

export default context('Login', () => {
  it('Its login page', () => {
    cy.visit(Cypress.env('BASE_URL'));
    cy.location('pathname').should('include', '/');
  });

  describe('Layout', () => {
    it('Navbar should be visible', () => {
      cy.get('body nav')
        .should('be.visible')
        .should('have.length', 1);
    });

    it('Navbar should only have 3 links', () => {
      cy.get('body nav div a')
        .should('be.visible')
        .should('have.length', 3);
    });

    it('Search input should be visible', () => {
      cy.get('#search-section')
        .should('be.visible')
        .should('have.length', 1);
    });

    it('Table should be visible', () => {
      cy.get('table')
        .should('be.visible')
        .should('have.length', 1);
    });
  });

  describe('Actions', () => {
    it('Navbar first link should redirect', () => {
      cy.get('body nav div a:nth-child(1)').should('have.attr', 'target', '_blank');
    });

    it('Navbar second link should redirect', () => {
      cy.get('body nav div a:nth-child(2)').should('have.attr', 'target', '_blank');
    });

    it('Navbar third link should redirect', () => {
      cy.get('body nav div a:nth-child(3)').should('have.attr', 'target', '_blank');
    });

    it('Input should add a task in the table', () => {
      const contentString = 'Clash';
      cy.get('input').type(contentString);
      cy.get('form').submit();
      cy.get('table tbody tr > td:first span').contains(contentString);
    });

    it('Elements in the table should change on click', () => {
      cy.get('table tbody tr > td:first span').click();
      cy.get('table tbody tr > td:nth-child(2) span')
        .should('be.visible')
        .should('have.length', 1);
    });

    it('Elements in the table should change on right click', () => {
      cy.get('table tbody tr > td:nth-child(2) span').rightclick();
      cy.get('table tbody tr > td:first span')
        .should('be.visible')
        .should('have.length', 1);
    });
  });
});
