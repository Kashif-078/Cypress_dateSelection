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
// Cypress.Commands.add('login', (email, password) => { ... })
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

Cypress.Commands.add('navigatingForward', (noOfTimes) => {
    let i=0;
    while(i<noOfTimes)
    {
        cy.get('a[title="Next"]').click();
        i++;
    }
})

Cypress.Commands.add('navigatingBackward', (noOfTimes) => {
    let i=0;
    while(i<noOfTimes)
    {
        cy.get('a[title="Prev"]').click();
        i++;
    }
})

Cypress.Commands.add('verifySelectedDate', (expectedYear, expectedMonth, expectedDate) => {
    // Assertions
    cy.get('.ui-datepicker-year').should('contain', Number(expectedYear))
    cy.get('.ui-datepicker-month').should('contain', expectedMonth)
    cy.get('td.ui-datepicker-current-day')
        .find('a.ui-state-active')
        .should('contain', Number(expectedDate))
})