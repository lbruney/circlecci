import {MSGS, PATHS, DATA} from "../../../config/constants";

describe(`${MSGS.name}.${MSGS.entity}.${MSGS.edit}.Sample`, () => {

    beforeEach(() => {
        cy.login()
        cy.visit(`${PATHS.edit}/sample?uuid=${DATA.sample.uuid}`)
    })

    context("Ensure success of editing Source:", () => {
        it('Displays Hipaa', () => {
          cy.checkHipaa()
        })
        it("Displays modal", () => {
          cy.enterToSample('Updated')
        })
    })

})