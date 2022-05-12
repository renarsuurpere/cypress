describe('As a user I can place order', () => {
    it('I can add item to cart', () => {
        cy.visit('http://automationpractice.com/index.php')
        cy.get('.login').click()
        cy.get('#email').type('11aaa@test.ee')
        cy.get('#passwd').type('12345')
        cy.get('#SubmitLogin').click()
        cy.get('.sf-with-ul').first().click()
        cy.get('.ajax_add_to_cart_button').first().click()
        cy.get('#layer_cart')
    })
})