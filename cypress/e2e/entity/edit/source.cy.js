import {MSGS, PATHS} from "../../../config/constants";

describe(`${MSGS.name}.${MSGS.entity}.${MSGS.edit}.Source`, () => {
    beforeEach(() => {
        cy.login()
        cy.visit(PATHS.search)
    })

    context("Ensure success of editing Source:", () => {
        it('Displays Hipaa', () => {
            cy.entityCreate()
            cy.get('.hipaa-alert').should('have.length', 1)
        })
        it("Displays modal", () => {
            cy.visit('https://data.dev.sennetconsortium.org/edit/source?uuid=b5874d153e668d110a562c933671fdac')
            cy.enterToSource('Updated')
        })
    })

})