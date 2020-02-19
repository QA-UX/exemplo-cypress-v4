/// <reference types="Cypress" />

beforeEach(() => {
  cy.visit('http://localhost:3000/admin/user-page')
});

describe('Teste corretamente tela Usuarios', () => {
  it('espera que adicione um aluno', () => {
    cy.get('.form-group')
      .find('input[name="nome"]').type('John', { delay: 100 })
      .should('have.value', 'John');
    cy.get('.form-group')
      .find('input[name="sobrenome"]').type('Doe', { delay: 100 })
      .should('have.value', 'Doe');
    cy.get('.form-group')
      .find('input[name="email"]').type('johndoe@email.com');
    cy.get('.form-group')
      .find('input[name="endereco"]').type('Rua vila lobos, 1050');
    cy.get('.form-group')
      .find('input[name="celular"]').type('9999-4444');
    cy.get('.form-group')
      .find('input[name="cidade"]').type('Maringa');
    cy.get('.form-group')
      .find('input[name="pais"]').type('Russia');
    cy.get('.form-group')
      .find('input[name="cep"]').type('9999999');
    
    cy.get('.update')
      .find('button[type="submit"]').click();

    cy.get('.list-unstyled')
      .find('div[test="aluno-0-9999"]')
      .should('contain','John Doe');
  });

  it('espera que adicione aluno e confirme', () => {
    cy.get('.form-group')
      .find('input[name="nome"]').type('John', { delay: 100 })
      .should('have.value', 'John');
    cy.get('.form-group')
      .find('input[name="sobrenome"]').type('Doe', { delay: 100 })
      .should('have.value', 'Doe');
    cy.get('.form-group')
      .find('input[name="email"]').type('johndoe@email.com');
    cy.get('.form-group')
      .find('input[name="endereco"]').type('Rua vila lobos, 1050');
    cy.get('.form-group')
      .find('input[name="celular"]').type('9999-4444');
    cy.get('.form-group')
      .find('input[name="cidade"]').type('Maringa');
    cy.get('.form-group')
      .find('input[name="pais"]').type('Russia');
    cy.get('.form-group')
      .find('input[name="cep"]').type('9999999');
    
    cy.get('.update')
      .find('button[type="submit"]').click();

    cy.get('.list-unstyled')
      .find('div[test="aluno-0-9999"]')
      .should('contain','John Doe');

    cy.get('.text-right')
      .find('button[test="aluno-0-9999"]')
      .click()
  });

  // it('espera que adicione 3 alunos e scroll até final ', () => {
  //   //pass
  // });

  // it('espera que adicione 3 alunos e confirme o segundo ', () => {
  //   //pass
  // });

})