# PER5 - Cypress Test Suite

Repositório com os testes automatizados de ponta a ponta (E2E) da landing page da **PER5** usando [Cypress](https://www.cypress.io/).

## 📂 Estrutura dos testes
- `smoke.seo.cy.js` → testes básicos de SEO/Smoke (status 200, meta tags).  
- `nav.cy.js` → navegação pelo menu (scroll para seções, links externos).  
- `cta.cy.js` → validação dos CTAs (WhatsApp, Instagram, etc.).  
- `responsive.cy.js` → verificação em diferentes viewports (mobile, tablet, desktop).  
- `links.cy.js` → integridade de links internos e página 404.  
- `acessibilidade.cy.js` → análise de acessibilidade com [cypress-axe](https://github.com/component-driven/cypress-axe).

## 🚀 Pré-requisitos
- [Node.js](https://nodejs.org/) v18 ou superior  
- [npm](https://www.npmjs.com/) (vem junto com Node)

## ⚙️ Instalação
Clone o repositório e instale as dependências:

```bash
git clone https://github.com/<seu-usuario>/per5-cypress-tests.git
cd per5-cypress-tests
npm install
