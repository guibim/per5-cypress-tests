// Teste Smoke/SEO básico
describe('Smoke/SEO', () => {
  it.only('Carrega a home e verifica title/description/canonical', () => {
    cy.visit('https://per5.com.br/', { failOnStatusCode: false });
    cy.title().should('match', /PER5/i);
    cy.get('meta[name="description"]')
      .should('have.attr', 'content')
      .and('not.be.empty');
    cy.get('link[rel="canonical"]')
      .should('have.attr', 'href')
      .and('match', /per5\.com\.br/i);
  });

  it('www resolve para o host correto', () => {
    cy.visit('https://www.per5.com.br', { failOnStatusCode: false });
    cy.location('hostname', { timeout: 10000 }).should('match', /^per5\.com\.br$/);
  });
});