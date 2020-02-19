/// <reference types="Cypress" />

/*
  Exercício Bônus
  Exercicio consiste em acessar a pagina da Elotech
  pelo google e depois acessar a aba notícias
*/

describe('acessar google', () =>{
  it('acessar página elotech', () =>{
    cy.visit('https://www.google.com')
    cy.get('input[class="gLFyf gsfi"').type('Elotech Notícias {enter}')
    
    cy.get('.rc')
      .get('.r')
      .find('a[href="https://www.elotech.com.br/blog/"]').click()
      .wait(2000)
    
    cy.get('.pageheader-title').should('contain', 'Notícias');
    
  })
})