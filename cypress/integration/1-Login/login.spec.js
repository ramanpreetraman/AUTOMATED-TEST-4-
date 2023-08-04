describe("Login Test", () => {
  it("Logs in successfully", () => {
    cy.login()
    // visit catagories
    cy.get(
      '[href="https://automationteststore.com/index.php?rt=product/category&path=36"]'
    ).click({ force: true })

    // categories count
    cy.get("ul.thumbnails img").should("have.length", 6)

    // visit face category
    cy.get(
      '[href="https://automationteststore.com/index.php?rt=product/category&path=36_38"]'
    )
      .first()
      .click({ force: true })

    cy.title().should("eq", "Face")

    cy.logout()
  })
})
