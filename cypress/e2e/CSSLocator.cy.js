
describe('cssLocators',()=>{
    it('csslocatorsTest',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get(':nth-child(1) > button').click();
        
    });


 
       
    })
