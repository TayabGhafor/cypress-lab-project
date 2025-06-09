describe('Login Test', () => {
  it('should login successfully', () => {
    cy.visit('https://www.saucedemo.com');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
    cy.get('.title').should('have.text', 'Products');
  });
});