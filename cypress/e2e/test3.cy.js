
//visitar la web

before(()=>
    cy.visit('https://pocketaces2.github.io/fashionhub/login.html')
  )

  describe('I want to verify I can log in to', () => {
    
  //poner user/pass y darle a enter
    it('logs in', () => {
      cy.get('input').eq(0).type('demouser')
      cy.get('input').eq(1).type('fashion123').type('{enter}')
      })
    })