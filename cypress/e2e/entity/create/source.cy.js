import {MSGS, PATHS} from "../../../config/constants";

describe(`${MSGS.name}.${MSGS.entity}.${MSGS.create}.Source`, () => {
    beforeEach(() => {
        cy.login()
        cy.visit(PATHS.search)
    })

    context("Ensure success of creating Source:", () => {
        it('Displays Hipaa', () => {
            cy.entityCreate()
            cy.get('.hipaa-alert').should('have.length', 1)
        })
        it("Displays modal", () => {
            cy.entityCreate()
            cy.get('#group_uuid').select('University of Pittsburgh TMC')
            cy.enterToSource()
        })
    })

})