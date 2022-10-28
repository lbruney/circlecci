import {MSGS, PATHS, DATA} from "../../config/constants";
import {AUTH} from "../../config/local.js"

describe(`${MSGS.name}.Auth`, () => {

    it('Cannot create content when not logged in', () => {
        cy.visit(`${PATHS.edit}/dataset?uuid=create`)
        cy.contains('Access denied')
    })

    it('Cannot edit content when not logged in', () => {
        cy.visit(`${PATHS.edit}/dataset?uuid=${DATA.dataset.uuid}`)
        cy.contains('Access denied')
    })

})