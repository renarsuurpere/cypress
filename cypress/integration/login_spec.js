describe('As a customer I can log in', () => {
    it('displays log in button on nav bar', () => {
        cy.visit('http://automationpractice.com/index.php')
        cy.get('nav > div').should(($div) => {
            expect($div.eq(0)).to.contain('Sign in')
        })
    })
    it('takes me to login page and showing login form', () => {
        cy.get('.login').click()
        cy.get('#login_form')
    })
    it('won\'t let me login without credentials', () => {
        cy.get('#SubmitLogin').click()
        cy.get('.alert-danger > ol > li').should(($lis) => {
            expect($lis.eq(0)).to.contain('An email address required.')
        })
    })
    it('won\'t let me login with with plain text on email field', () => {
        cy.get('#email').type('test')
        cy.get('#SubmitLogin').click()
        cy.get('.alert-danger > ol > li').should(($lis) => {
            expect($lis.eq(0)).to.contain('Invalid email address.')
        })
    })
    it('won\'t let me login with just email address', () => {
        cy.get('#email').type('11aaa@test.ee')
        cy.get('#SubmitLogin').click()
        cy.get('.alert-danger > ol > li').should(($lis) => {
            expect($lis.eq(0)).to.contain('Password is required.')
        })
    })
    it('won\'t let me login with just password', () => {
        cy.get('#email').clear()
        cy.get('#passwd').type('12345')
        cy.get('#SubmitLogin').click()
        cy.get('.alert-danger > ol > li').should(($lis) => {
            expect($lis.eq(0)).to.contain('An email address required.')
        })
    })
    it('won\'t let me login with invalid email', () => {
        cy.get('#email').type('test@test.ee')
        cy.get('#passwd').clear()
        cy.get('#passwd').type('12345')
        cy.get('#SubmitLogin').click()
        cy.get('.alert-danger > ol > li').should(($lis) => {
            expect($lis.eq(0)).to.contain('Authentication failed.')
        })
    })
    it('won\'t let me login with invalid password', () => {
        cy.get('#email').clear()
        cy.get('#email').type('test@test.ee')
        cy.get('#passwd').clear()
        cy.get('#passwd').type('11111')
        cy.get('#SubmitLogin').click()
        cy.get('.alert-danger > ol > li').should(($lis) => {
            expect($lis.eq(0)).to.contain('Authentication failed.')
        })
    })
    it('let\'s me log in with correct credentials and sign out button is visible', () => {
        cy.get('#email').clear()
        cy.get('#email').type('11aaa@test.ee')
        cy.get('#passwd').clear()
        cy.get('#passwd').type('12345')
        cy.get('#SubmitLogin').click()
        cy.get('nav > div').should(($div) => {
            expect($div).to.have.length(3)
            expect($div.eq(1)).to.contain('Sign out')
        })
    })
})