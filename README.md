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
- **O que faz:**  
  - Verifica se a página responde com status 200.  
  - Checa meta tags básicas de SEO.  
- **Tipo de teste:** E2E / Smoke  
- **Categoria:** SEO  

---

### 2. `nav.cy.js`
- **O que faz:**  
  - Testa navegação pelo menu (scroll até seções internas).  
  - Valida que o botão **Serviços** leva à seção *Nossos Serviços*.  
  - Confirma que os links **Portfólio** e **Contato** abrem em novas abas corretamente.  
- **Tipo de teste:** E2E / Funcional  
- **Categoria:** Navegação  

---

### 3. `cta.cy.js`
- **O que faz:**  
  - Valida a existência e integridade de todos os **CTAs externos** (WhatsApp, Instagram, etc.).  
  - Garante que nenhum link externo dispara abertura de abas durante os testes.  
- **Tipo de teste:** E2E / Funcional  
- **Categoria:** Integração externa (links para serviços de terceiros)  

---

### 4. `responsive.cy.js`
- **O que faz:**  
  - Executa a página em **3 viewports** (mobile, tablet, desktop).  
  - Confirma header, título/hero e CTAs visíveis conforme a resolução.  
  - Corrige comportamento de menu mobile (hamburger).  
- **Tipo de teste:** E2E / UI  
- **Categoria:** Responsividade / UX  

---

### 5. `links.cy.js`
- **O que faz:**  
  - Testa todos os links internos (resposta 200/301/302).  
  - Verifica que uma rota inválida exibe página **404 amigável**.  
- **Tipo de teste:** E2E / Funcional  
- **Categoria:** Integração interna (roteamento)  

---

### 6. `acessibilidade.cy.js`
- **O que faz:**  
  - Roda análise com **cypress-axe**.  
  - Falha em violações **críticas/serious** de acessibilidade.  
  - Lista problemas como contraste, `alt` em imagens e landmarks.  
- **Tipo de teste:** Acessibilidade  
- **Categoria:** UX / Inclusão  


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
- Disponiveis no arquivo Gherkin-BDD.txt
