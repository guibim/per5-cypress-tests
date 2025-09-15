
describe('Navegação do menu (landpage única)', () => {
  beforeEach(() => {
    cy.visit('/', { failOnStatusCode: false });
    cy.window().then((w) => w.scrollTo(0, 0)); 
  });

  const assertHashOrScroll = () => {
    cy.location('hash', { timeout: 8000 }).then((hash) => {
      if (hash && hash.length > 1) {
        expect(hash).to.match(/^#.+/);
      } else {
        cy.window().its('scrollY', { timeout: 8000 }).should('be.greaterThan', 0);
      }
    });
  };

  it('menu aparece', () => {
    cy.get('header nav').should('be.visible');
  });

it('clicar em Serviços mostra seção "Nossos Serviços"', () => {
  cy.get('button.text-foreground')
    .contains('Serviços')
    .click({ force: true });

  // espera até 8s pelo texto "Nossos Serviços" aparecer visível
  cy.get('section, h2, h3, div')
    .contains('Nossos Serviços', { timeout: 8000 })
    .should('be.visible');
});



  it('Portfólio abre em nova aba', () => {
    cy.contains('a', /Portfó|Portf|Projet/i)
      .should('have.attr', 'target', '_blank')
      .and('have.attr', 'href')
      .then((href) => {
        expect(href).to.match(/^http/); 
      });
    // não clica em link externo, só verifica se tem o link
  });

  it('Contato abre em nova aba', () => {
    cy.contains('a', /Contato|Fale Conosco|Orçamento/i)
      .should('have.attr', 'target', '_blank')
      .and('have.attr', 'href')
      .then((href) => {
        expect(href).to.match(/^http/);
      });
  });
});
