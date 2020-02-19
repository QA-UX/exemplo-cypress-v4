/// <reference types="Cypress" />

beforeEach(() => {
  cy.visit('http://localhost:3000/admin/notifications')
});

describe('Teste corretamente Notificações', () => {

  it('espera que remova a notificação aluno 10865-10', () => {
    cy.get('.card-body')
      .find('[test="0"]')
      .find('button').click()
      .wait(3000);
  });

  it('espera que remova a notificacao Curso 5522 Turma 20', () => {
    //pass
  });

  it('espera que o scroll funcione até o final da pagina', () => {
    cy.scrollTo('bottom')
    cy.get('.card-body')
      .find('[test="13"]')
      .find('button').click()
      .wait(3000);
    cy.scrollTo('top');
  });
})