describe('Login Test', () => {
  const users = [
    { username: 'standard_user', password: 'secret_sauce', expected: 'Products' },
    { username: 'locked_out_user', password: 'secret_sauce', expected: 'Epic sadface: Sorry, this user has been locked out.' }
  ];
  users.forEach(user => {
    it(`should handle login for ${user.username}`, () => {
      cy.visit('https://www.saucedemo.com');
      cy.get('#user-name').type(user.username);
      cy.get('#password').type(user.password);
      cy.get('#login-button').click();
      cy.get(user.expected.includes('Epic sadface') ? '.error-message-container' : '.title')
        .should('have.text', user.expected);
    });
  });
});