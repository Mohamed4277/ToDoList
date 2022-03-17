

it('visits base url', () => {
    cy.visit('/') 
    cy.get('#task').type('Tache 1')
    cy.get('#description').type('Description 1')
    cy.get('#submit').click()
    cy.get('#table').contains('Tache 1')
  })