
// Validação de CTAs externos (sem clicar): WhatsApp, Instagram, etc.

describe('CTAs / Links externos', () => {
  beforeEach(() => {
    cy.visit('/', { failOnStatusCode: false });

    // Garante que nada vai abrir nova aba/janela durante o teste
    cy.window().then((win) => {
      cy.stub(win, 'open').as('winOpen');
    });
  });

  it('CTA principal para WhatsApp', () => {
    // Ajuste o texto do botão se necessário (ex.: "Começar meu projeto agora")
    cy.contains('a, button', /começar meu projeto|fale conosco|orçamento|orcamento|whats/i)
      .should('be.visible')
      .and(($el) => {
        const href = $el.attr('href') || '';
        // aceita wa.me ou api.whatsapp.com
        expect(href, 'href WhatsApp').to.match(/(wa\.me|api\.whatsapp\.com)/i);
        // validação do número esperado
        expect(href, 'número esperado').to.match(/5519991508664/);
      });
  });

  it('Link de WhatsApp no header/hero existe (se houver)', () => {
    // Se houver mais de um link de Whats, pelo menos um deve existir e ser válido
    cy.get('a[href*="wa.me"], a[href*="api.whatsapp.com"]').should('have.length.at.least', 1)
      .first()
      .should('have.attr', 'href')
      .and('match', /5519991508664/);
  });

  it('Instagram abre em nova aba e aponta para instagram.com', () => {
    cy.get('a[href*="instagram.com"]')
      .should('have.attr', 'target', '_blank')
      .and('have.attr', 'href')
      .and('match', /instagram\.com/i);
    // não clicar; apenas validação de atributos
  });

  it('Não abriu nenhuma janela/aba externa indevidamente', () => {
    cy.get('@winOpen').should('not.have.been.called');
  });

  // (Opcional) Validações adicionais se existirem
  it('Links "tel:" (telefone) são válidos', () => {
    cy.get('a[href^="tel:"]').then(($els) => {
      if ($els.length) {
        cy.wrap($els.first())
          .should('have.attr', 'href')
          .and('match', /^tel:\+?\d+$/); // simples: somente dígitos 
      } 
    });
  });

  it('Links "mailto:" (e-mail) são válidos', () => {
    cy.get('a[href^="mailto:"]').then(($els) => {
      if ($els.length) {
        cy.wrap($els.first())
          .should('have.attr', 'href')
          .and('match', /^mailto:[^@]+@[^@]+\.[^@]+$/);
      }
    });
  });
  it('Todos os links WhatsApp são válidos', () => {
  cy.get('a[href*="wa.me"], a[href*="api.whatsapp.com"]')
    .should('have.length.at.least', 1) 
    .each(($a) => {
      const href = $a.attr('href');
      expect(href, 'href do WhatsApp').to.match(/(wa\.me|api\.whatsapp\.com)/i);
      // validar que todos vão para o mesmo número
      expect(href, 'número esperado').to.match(/5519991508664/);
    });
});

});
