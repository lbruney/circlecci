import {MSGS, PATHS} from "../../../config/constants";

describe(`${MSGS.name}.${MSGS.entity}.${MSGS.edit}.Source`, () => {
    beforeEach(() => {
        cy.login()
        cy.visit(`${PATHS.edit}/source?uuid=b5874d153e668d110a562c933671fdac`)
    })

    context("Ensure success of editing Source:", () => {
        it('Displays Hipaa', () => {
            cy.checkHipaa()
        })
        it("Displays modal", () => {
            cy.enterToSource('Updated')
        })
    })

})