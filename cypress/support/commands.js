Cypress.Commands.add("login", () => {
    cy.visit("https://www.automationteststore.com/")
    cy.contains("Login or register").click()
  
    cy.get("#loginFrm_loginname").type("ramanpreetramanpreet")
    cy.get("#loginFrm_password").type("ramanpreet")
  
    cy.get('#loginFrm button[type="submit"]').click()
    cy.contains("Welcome back ramanpreet").should("be.visible")
  })
  
  Cypress.Commands.add("logout", () => {
    cy.get(
      '[href="https://automationteststore.com/index.php?rt=account/logout"]'
    ).first().click({ force: true })
    cy.get(
      '[title="Continue"]'
    ).click({ force: true })
  })
  