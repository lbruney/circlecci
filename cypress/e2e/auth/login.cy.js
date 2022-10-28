import {MSGS, PATHS} from "../../config/constants";
import {AUTH} from "../../config/local.js"

describe(`${MSGS.name}.Auth`, () => {

  it('Can login', () => {
    cy.login()
  })
})