describe("Product Test", () => {
  before(() => {
    cy.login()
  })

  it("product add count", () => {
    // visit catagories
    cy.visit(
      "https://automationteststore.com/index.php?rt=product/product&path=68_70&product_id=121"
    )

    cy.title().should("eq", "Designer Men Casual Formal Double Cuffs Grandad Band Collar Shirt Elegant Tie")

    cy.get('input[name="quantity"]').clear()
    cy.get('input[name="quantity"]').type(6)

    cy.contains('a', 'Add to Cart').click();

    cy.contains('span', 'Shopping Cart')
    cy.contains('a', 'Checkout')

  })

  after(() => {
    cy.logout()
  })
})
