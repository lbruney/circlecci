Cypress.Commands.add('enterToSource', (action = 'Created') => {
    cy.get('#lab_source_id').clear().type('Aorta')
    cy.get('#source_type').select('Human')
    cy.get('#protocol_url').clear().type('https://dx.doi.org/10.17504/protocols.io.bf4cjqsw')
    cy.get('#description').clear().type('Cypress automated description')
    cy.get('button.btn').click()
    cy.get('.modal-title').contains(`Source ${action}`)
    cy.copyVal()
})