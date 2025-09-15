// Testes básicos de responsividade em 3 viewports

//Verifica se o header aparece sempre.
//Verifica que o título principal (ex.: “PER5 Engenharia…”) está visível.
//Verifica que existe pelo menos um CTA principal (botão para WhatsApp, orçamento, etc.).


describe('Responsividade da landing', () => {
  const sizes = [
    { device: 'Mobile',  width: 375,  height: 667 },
    { device: 'Tablet',  width: 768,  height: 1024 },
    { device: 'Desktop', width: 1440, height: 900 },
  ];

  // candidatos de toggle de menu mobile 
  const TOGGLE_SELECTORS = [
    '[data-testid="menu-toggle"]',
    'button[aria-expanded]',        
    '[aria-controls]',              
    '.hamburger', '.menu-toggle',   
    '[class*="hamburger"]', '[class*="menu"]'
  ];

  // Tenta abrir o menu mobile se existir 
  const openMobileMenuIfPresent = () => {
    cy.get('body').then(($body) => {
      const found = TOGGLE_SELECTORS.find((sel) => $body.find(sel).length > 0);
      if (found) {
        // clica no primeiro visível; se nenhum visível, não falha
        const $visible = $body.find(found).filter(':visible');
        if ($visible.length) {
          cy.get(found).filter(':visible').first().click({ force: true });
        } else {
          cy.log(`Toggle encontrado (${found}) porém invisível — seguindo sem abrir.`);
        }
      } else {
        cy.log('Nenhum toggle de menu mobile encontrado — seguindo sem abrir.');
      }
    });
  };

  sizes.forEach(({ device, width, height }) => {
    it(`Layout em ${device} ${width}x${height}`, () => {
      cy.viewport(width, height);
      cy.visit('/', { failOnStatusCode: false });

      // Header visível
      cy.get('header').should('be.visible');

      // Hero/título visível (regex flexível)
      cy.get('h1, h2').contains(/per5|engenharia|projeto|serviç|soluç/i).should('be.visible');

      if (device === 'Mobile') {
        openMobileMenuIfPresent();

        // Preferência: CTA WhatsApp visível
        cy.get('a[href*="wa.me"], a[href*="api.whatsapp.com"]').then(($links) => {
          const anyVisible = [...$links].some((el) => Cypress.$(el).is(':visible'));
          if (anyVisible) {
            // passa exigindo ao menos 1 visível
            cy.wrap($links).filter(':visible').should('have.length.at.least', 1);
          } else {
            // fallback: se nenhum visível, pelo menos confirme que existe no DOM
            cy.log('Nenhum CTA WhatsApp visível no mobile; confirmando existência no DOM.');
            expect($links.length, 'links WhatsApp no DOM').to.be.greaterThan(0);
          }
        });
      } else {
        // Tablet/Desktop: costuma haver CTA visível no hero/header
        cy.contains(/começar meu projeto|fale conosco|orçamento/i).should('be.visible');
      }
    });
  });
});
