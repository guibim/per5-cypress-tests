// cypress/e2e/a11y.cy.js
// Acessibilidade básica da home com axe

describe('Acessibilidade (axe)', () => {
  it('sem violações CRÍTICAS na home', () => {
    cy.visit('/', { failOnStatusCode: false });
    cy.injectAxe();
    // apenas críticas (mais comum para smoke)
    cy.checkA11y(null, { includedImpacts: ['critical'] });
  });

  // O Site está com problemas de acessibilidade
  it('sem violações CRÍTICAS ou GRAVES na home (opcional)', () => {
    cy.visit('/', { failOnStatusCode: false });
    cy.injectAxe();
    cy.checkA11y(null, { includedImpacts: ['critical', 'serious'] });
  });
});
