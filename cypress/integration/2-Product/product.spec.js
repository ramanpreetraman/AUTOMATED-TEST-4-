describe("Product Test", () => {
  before(() => {
    cy.login()
  })
  it("product in successfully", () => {
    // visit catagories
    cy.visit(
      "https://automationteststore.com/index.php?rt=product/product&path=68_70&product_id=120"
    )

    cy.title().should("eq", "Jersey Cotton Striped Polo Shirt")
  })


  after(() => {
    cy.logout()
  })
})
