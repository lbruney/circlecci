// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
import {PATHS} from "../config/constants";
import {AUTH} from "../config/local";

Cypress.Commands.add('login', (name = 'pitt', options = { }) => {
    cy.session(name, () => {
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

Cypress.Commands.add('facets', (name = 'Sample', legend = 'Sample Category', index = 2) => {
    cy.wait(1000)
    cy.get(`#example_facet_undefined${name}`).parent().click()
    if (legend && legend.length) {
        cy.get('legend').eq(index).should('have.text', legend)
    }
})
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })