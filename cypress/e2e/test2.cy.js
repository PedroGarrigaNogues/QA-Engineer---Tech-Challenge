describe('check if a page is returning the expected status code', () => {

    //visitar la web y comprobar que da 200
    it('gets a 200', () => {
      cy.request('https://pocketaces2.github.io/fashionhub/').then((response) => {
        expect(response.status).to.eq(200)
      })
    })
    
      //visitar la web y comprobar que no da 400
    it('doesnt get a 400', () => {
      cy.request('https://pocketaces2.github.io/fashionhub/').then((response) => {
        expect(response.status).to.not.equal('400')
      })
    })
  })
  