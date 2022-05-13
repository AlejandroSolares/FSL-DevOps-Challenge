/* global cy */
describe('Front test', function(){
    it('front page-owner site shows',function(){
        cy.visit('http://localhost:3000')
        cy.contains('rderik.com')
    })
})