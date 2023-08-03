describe('Login Test', () => {
  it('Logs in successfully', () => {
    cy.visit('https://www.automationteststore.com/');
    cy.contains('Login or register').click();

    cy.get('#loginFrm_loginname').type('ramanpreetramanpreet');
    cy.get('#loginFrm_password').type('ramanpreet');

    cy.get('#loginFrm button[type="submit"]').click();
    cy.contains('Welcome back ramanpreet').should('be.visible');
    // Add assertions or further steps as needed
  });
});