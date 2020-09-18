describe('Pizza app', () => {
    beforeEach(() => {
      // arbitrary code you want running
      // before each test
      cy.visit('http://localhost:3000')
    })

    const name = () => cy.get('input[name=name]')
    const button = () => cy.get('#button]')
    

    it('sanity check to make sure tests work', () => {

        expect(1 + 2).to.equal(3)
 
      })
    it('can type in the inputs', () => {
        name()
          .should('have.value', '')
          .type('Be nice to the CSS expert')
          .should('have.value', 'Be nice to the CSS expert')
        })
    it('cant submit form with button', () =>{
        button()
    })



})