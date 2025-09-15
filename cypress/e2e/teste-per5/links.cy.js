
// Checa links internos e página 404

describe('Links internos e 404', () => {
  beforeEach(() => {
    cy.visit('/', { failOnStatusCode: false });
  });

  it('todos os links internos respondem 200/301/302', () => {
    // captura anchors internos (#, /, ./), visíveis e não vazios
    cy.get('a[href]').filter(':visible').then(($as) => {
      const internos = [...$as].filter((a) => {
        const href = a.getAttribute('href') || '';
        return /^(#|\/|\.\/)/.test(href) && href !== '#';
      });

      // nada interno? então passa (
      if (!internos.length) return;

      internos.forEach((a) => {
        const href = a.getAttribute('href');
        // remove múltiplos hashes e normaliza URL
        const url = href.startsWith('#') ? `/${href}` : href;
        cy.request({ url, failOnStatusCode: false }).its('status')
          .should('be.oneOf', [200, 301, 302]);
      });
    });
  });

  it('rota inexistente mostra 404 amigável', () => {
    cy.request({ url: '/nao-existe-rota-de-teste', failOnStatusCode: false })
      .its('status')
      .should('be.oneOf', [404, 200]); // alguns hosts servem 200 com template de 404

    cy.visit('/nao-existe-rota-de-teste', { failOnStatusCode: false });
    cy.contains(/404|página não encontrada|voltar|home/i).should('exist');
  });
});
