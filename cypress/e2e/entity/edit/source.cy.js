import {MSGS, PATHS, DATA} from "../../../config/constants";

describe(`${MSGS.name}.${MSGS.entity}.${MSGS.edit}.Source`, () => {
    beforeEach(() => {
        cy.login()
        cy.visit(`${PATHS.edit}/source?uuid=${DATA.source.uuid}`)
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