# 🧪 PER5 - Cypress Test Suite

Este repositório contém a suíte de **testes automatizados End-to-End (E2E)** desenvolvida com [Cypress](https://www.cypress.io/), utilizando o **Visual Studio Code (VSCode)**, aplicada sobre uma **landing page da empresa PER5**, desenvolvida por mim.  

O objetivo é construir um **case pessoal de QA e automação**, cobrindo desde testes de smoke/SEO até acessibilidade.

---

## 📝 Notas

- A **empresa PER5 existe de fato**, e a **landing page foi desenvolvida por mim**, utilizando **HTML, TailwindCSS e JavaScript**.  
- Neste cenário de testes, estou aplicando **E2E tests com Cypress** em diferentes frentes: smoke/SEO, navegação, CTAs, responsividade, links internos e acessibilidade.  
- O projeto tem caráter **pessoal e de estudo**, servindo como prática para consolidar conhecimentos em **QA, automação de testes e boas práticas de qualidade de software**.  
- O teste de acessibilidade segue abordagem **incremental**: inicialmente cobre violações **críticas e graves**, podendo ser expandido para **moderadas e leves** à medida que o projeto evolui.  

---

## 🌐 Sobre o Projeto

- **Landing page:** baseada na identidade visual da PER5.  
- **Objetivo dos testes:** validar comportamento essencial da página, garantindo qualidade, responsividade e acessibilidade.  
- **Ambiente de desenvolvimento:** Visual Studio Code (VSCode).  
- **Tecnologias do site:** HTML + TailwindCSS + JavaScript.  

---

## 📂 Estrutura de Testes

### 1. `smoke.seo.cy.js`
- Verifica se a página responde com status 200.  
- Checa meta tags básicas de SEO.  

### 2. `nav.cy.js`
- Testa navegação pelo menu (scroll até seções internas).  
- Valida que o botão **Serviços** leva à seção *Nossos Serviços*.  
- Confirma que os links **Portfólio** e **Contato** abrem em novas abas corretamente.  

### 3. `cta.cy.js`
- Valida a existência e integridade de todos os **CTAs externos** (WhatsApp, Instagram, etc.).  
- Garante que nenhum link externo dispara abertura de abas durante os testes.  

### 4. `responsive.cy.js`
- Executa a página em **3 viewports** (mobile, tablet, desktop).  
- Confirma header, título/hero e CTAs visíveis conforme a resolução.  
- Corrige comportamento de menu mobile (hamburger).  

### 5. `links.cy.js`
- Testa todos os links internos (resposta 200/301/302).  
- Verifica que uma rota inválida exibe página **404 amigável**.  

### 6. `acessibilidade.cy.js`
- Roda análise com **cypress-axe**.  
- Falha em violações **críticas/serious** de acessibilidade.  
- Lista problemas como contraste, `alt` em imagens e landmarks.  

---

## 🚀 Pré-requisitos
- [Node.js](https://nodejs.org/) v18+  
- [npm](https://www.npmjs.com/)  
- Navegador Chrome/Chromium (usado pelo Cypress).  
- [VSCode](https://code.visualstudio.com/) (ambiente usado no desenvolvimento).  

---

## ⚙️ Instalação

Clone este repositório e instale as dependências:

bash
git clone https://github.com/guibim/per5-cypress-tests.git
cd per5-cypress-tests
npm install

# 📖 Cenários de Testes (BDD/Gherkin)

Feature: Validação da landing page PER5

  # 1. Smoke/SEO
  Scenario: Página inicial responde com sucesso
    Given que acesso a home da PER5
    When a página carrega
    Then o status deve ser 200
    And as meta tags de SEO devem estar presentes

  # 2. Navegação
  Scenario: Navegar até seção de Serviços
    Given que acesso a home da PER5
    When clico no menu "Serviços"
    Then devo visualizar a seção "Nossos Serviços"

  Scenario: Links de Portfólio abrem em nova aba
    Given que acesso a home da PER5
    When clico no link de Portfólio
    Then o link deve abrir em uma nova aba

  Scenario: Links de Contato abrem em nova aba
    Given que acesso a home da PER5
    When clico no link de Contato
    Then o link deve abrir em uma nova aba

  # 3. CTAs
  Scenario: Botões de WhatsApp estão disponíveis
    Given que acesso a home da PER5
    Then devo visualizar ao menos um CTA de WhatsApp válido

  Scenario: Links externos não abrem durante os testes
    Given que estou rodando os testes
    Then os CTAs externos devem ser validados sem abrir abas no navegador

  # 4. Responsividade
  Scenario Outline: Layout se adapta às telas
    Given que acesso a home da PER5
    When visualizo em resolução <largura>x<altura>
    Then o header deve estar visível
    And o título principal deve estar visível
    And ao menos um CTA deve estar disponível

  Examples:
      | largura | altura |
      | 375     | 667    |  # Mobile
      | 768     | 1024   |  # Tablet
      | 1440    | 900    |  # Desktop

  # 5. Links internos
  Scenario: Links internos respondem corretamente
    Given que acesso a home da PER5
    When verifico todos os links internos
    Then todos devem responder com status 200, 301 ou 302

  Scenario: Página inexistente retorna 404
    Given que acesso uma rota inexistente
    Then devo visualizar uma página 404 amigável

  # 6. Acessibilidade
  Scenario: Página inicial sem violações críticas
    Given que acesso a home da PER5
    When executo a análise de acessibilidade com axe
    Then não devem existir violações críticas ou graves

