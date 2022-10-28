Cypress.Commands.add('enterToSource', (action = 'Created') => {
    cy.get('#lab_source_id').clear().type('Aorta')
    cy.get('#source_type').select('Human')
    cy.get('#protocol_url').clear().type('https://dx.doi.org/10.17504/protocols.io.bf4cjqsw')
    cy.get('#description').clear().type('Cypress automated description source')
    cy.get('button.btn').click()
    cy.get('.modal-title').contains(`Source ${action}`)
    cy.copyVal()
})

Cypress.Commands.add('enterToSample', (action = 'Created') => {
    cy.get('#lab_source_id').clear().type('Aorta')
    cy.get('#sample_category').select('Organ')
    cy.get('#organ').select('Brain')
    cy.get('#protocol_url').clear().type('https://dx.doi.org/10.17504/protocols.io.af4cjqsw')
    cy.get('#description').clear().type('Cypress automated description sample')
    cy.get('#lab_tissue_sample_id').clear().type(`${Math.floor(Math.random() * 1000)}-organ`)
    cy.get('button.btn').click()
    cy.get('.modal-title').contains(`Sample ${action}`)
    cy.copyVal()
})