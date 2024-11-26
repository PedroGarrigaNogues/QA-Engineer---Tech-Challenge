describe('I want to see how many open pull requests are there for our product', () => {
    it('fetches the pulls and creates a list', () => {
      cy.request({
        method: 'GET',
        url: 'https://api.github.com/repos/appwrite/appwrite/pulls',
        
      }).then((response) => {  
        
         // Extraer PRs
        const prData = response.body.map(pr => ({
          name: pr.title,
          date: pr.created_at,
          author: pr.user.login
        }));
               
        const list = 'Pulls:\n' + 
        prData.map(pr => `${pr.name},${pr.date},${pr.author}`).join('\n');


        //Definir el path y nombre del archivo
          const filePath = 'cypress/e2e/archives/list_pulls.txt';
        //Crear el archivo
          cy.writeFile(filePath, list);
      });
    });
  });
