/// <reference types="Cypress" />

beforeEach(() => {
  cy.visit('http://localhost:3000/admin/dashboard')
});

describe('Teste corretamente Sidebar', () => {
  it('espera que abra a aba dashboard', () => {
    cy.get('.navbar-brand')
      .should('have.attr', 'href', '/')
      .should('contain', 'Painel');
  });

  it('espera que abra a aba Notificações', () => {
    cy.get('.nav-link-notificacoes')
      .click();

    cy.get('.navbar-brand')
      .should('contain', 'Notificações');
  })

  it('espera que abra a aba Usuários', () => {
    cy.get('.nav-link-usuarios')
      .click();

    cy.get('.navbar-brand')
      .should('contain', 'Usuários');
  });
})

describe('Teste corretamente Footer', () => {
  it('espera que haja o link Unifcv', () => {
    cy.get('.footer-nav')
      .find('a[test="unifcv"]')
      .should('have.attr', 'href', 'https://unifcv.edu.br/')
      .should('contain', 'UniFCV');
  });

  it('espera que haja o link Cypress', () => {
    cy.get('.footer-nav')
      .find('a[test="cypress"]')
      .should('have.attr', 'href', 'https://www.cypress.io/')
      .should('contain', 'Cypress');
  });

  it('espera que haja o link ReactJS', () => {
    cy.get('.footer-nav')
      .find('a[test="reactjs"]')
      .should('have.attr', 'href', 'https://reactjs.org/')
      .should('contain', 'ReactJS');
  });

  it('espera que haja copyright', () => {
    cy.get('.copyright')
      .should('contain', 'ReactJS');
  });
})

describe('Teste se a pagina é expansível', () => {
  it('seja expansivel para macbook 15', () => {
    cy.viewport('macbook-15')
    cy.wait(2000);
    cy.get('.sidebar').should('be.visible')
  });

  it('seja expansível para iphone 5', () => {
    cy.viewport('iphone-5')
    cy.wait(2000)
    cy.get('.sidebar').should('not.be.visible')
  });

  it('seja expansivel para SEU CELULAR', () => {
    //pass
  });

  it('seja expansível para dimensão 1024x728', () => {
    cy.viewport(1024, 728)
    cy.get('.sidebar').should('be.visible')
  });

})