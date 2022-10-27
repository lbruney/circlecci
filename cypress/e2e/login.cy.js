import {PATHS} from "../config/constants";
import {AUTH} from "../config/local.js"

describe('portal ui login', () => {

  it('navigates', () => {
    cy.visit(PATHS.search)
    cy.contains('Sign-in').click()
    cy.contains('Log in with your institution credentials').click()
    cy.origin('auth.globus.org', () => {
      cy.contains('Continue').click()
      cy.contains('Continue').click()
      cy.get('#google_signin_btn').click()
    })

    cy.origin('accounts.google.com', () => {
      cy.get('input').type(AUTH.user)
      cy.contains('Next').click()
    })
    // cy.visit('http://localhost:3000/search')
    // cy.contains('Sign-out')
  })
})