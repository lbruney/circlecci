import {PATHS} from "../config/constants";
import {AUTH} from "../config/local.js"

describe('portal ui login', () => {

  it('navigates', () => {
    cy.visit(PATHS.search)
    cy.contains('Sign-in').click()
    cy.contains('Log in with your institution credentials').click()
    cy.origin('auth.globus.org',  { args: { AUTH } }, ({ AUTH }) => {
      // Use Globus
      cy.contains('Globus ID to sign in').click()
    })

    cy.origin('www.globusid.org', { args: { AUTH } }, ({ AUTH })  => {
      cy.get('input[name="username"]').type(AUTH.user)
      cy.get('input[name="password"]').type(AUTH.password)
      cy.get('button[type="submit"]').click()
    })

    cy.contains('Sign-out')

  })
})