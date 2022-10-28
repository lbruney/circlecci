import {MSGS, PATHS, DATA} from "../../../config/constants";

describe(`${MSGS.name}.${MSGS.entity}.${MSGS.edit}.Dataset`, () => {

    beforeEach(() => {
        cy.login()
        cy.visit(`${PATHS.edit}/dataset?uuid=${DATA.dataset.uuid}`)
    })

    context("Ensure success of editing Dataset:", () => {
        it('Displays Hipaa', () => {
            cy.checkHipaa()
        })
        it("Displays modal", () => {
            cy.enterToDataset('Updated')
        })
    })

})