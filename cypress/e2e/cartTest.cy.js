describe('Cart Functionality Test', () => {
  // Data-driven test cases
  const testCases = [
    {
      username: 'standard_user',
      password: 'secret_sauce',
      itemsToAdd: ['Sauce Labs Backpack', 'Sauce Labs Bike Light'],
      expectedCartCount: 2,
      expectedItemNames: ['Sauce Labs Backpack', 'Sauce Labs Bike Light']
    },
    {
      username: 'standard_user',
      password: 'secret_sauce',
      itemsToAdd: ['Sauce Labs Bolt T-Shirt'],
      expectedCartCount: 1,
      expectedItemNames: ['Sauce Labs Bolt T-Shirt']
    }
  ];

  testCases.forEach((testCase, index) => {
    it(`should add ${testCase.itemsToAdd.length} item(s) to cart for test case ${index + 1}`, () => {
      // Visit the website
      cy.visit('https://www.saucedemo.com');

      // Log in
      cy.get('#user-name').type(testCase.username);
      cy.get('#password').type(testCase.password);
      cy.get('#login-button').click();

      // Verify login success
      cy.get('.title').should('have.text', 'Products');

      // Add items to cart
      testCase.itemsToAdd.forEach(item => {
        cy.contains('.inventory_item_name', item)
          .parents('.inventory_item')
          .find('.btn_inventory')
          .click();
      });

      // Verify cart badge count
      cy.get('.shopping_cart_badge').should('have.text', testCase.expectedCartCount);

      // Navigate to cart
      cy.get('.shopping_cart_link').click();

      // Verify cart contents
      testCase.expectedItemNames.forEach(itemName => {
        cy.get('.cart_item').contains('.inventory_item_name', itemName).should('exist');
      });

      // Verify cart page title
      cy.get('.title').should('have.text', 'Your Cart');
    });
  });
});