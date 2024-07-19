/// <reference types="cypress" />

describe('Verifying Calendar Functionality - initialDate is set to \'10 July, 2020\'', () => {
    
    let date = new Date();  
    /**
     * The year, month, and day are set to 2020, July, and 10th respectively.
     */
    date.setFullYear(2020);
    date.setMonth(6);  // Month is 0-indexed, so 6 represents July
    date.setDate(10);
    
    let expectedYear = date.getFullYear(), 
    expectedMonth = date.toLocaleString('En-Us', {month:'long'}), 
    expectedDate = date.getDate().toString();

    beforeEach(() => {
        cy.intercept('https://demo.automationtesting.in/Datepicker.html').as('DP_Page') // Using Alias
        cy.visit('https://demo.automationtesting.in/Datepicker.html')
        cy.wait('@DP_Page') // Implicit Waiting
        // Set the clock to the future date
        cy.clock(date.getTime());

        cy.get('div input#datepicker1').as('dateCalendar')
    })

    context('Select Dates in current Month which is July', () => {

        it('Select a date before yesterday - \'08 July, 2020\'', () => {

            expectedDate = 8;
    
            // To open Date Picker Calendar
            cy.get('div input#datepicker1').click()
            // For Selecting Expected Date
            cy.contains('div#ui-datepicker-div table tr td a', expectedDate).click();
            // To open Date Calendar
            cy.get('div input#datepicker1').click()
            // Assertions
            cy.verifySelectedDate(expectedYear, expectedMonth, expectedDate)
    
        }) // End It Block

        it('Select a date after tomorrow - \'12 July, 2020\'', () => {

            expectedDate = 12;
    
            // To open Date Picker Calendar
            cy.get('div input#datepicker1').click()
            // For Selecting Expected Date
            cy.contains('div#ui-datepicker-div table tr td a', expectedDate).click();
            // To open Date Calendar
            cy.get('div input#datepicker1').click()
            // Assertions
            cy.verifySelectedDate(expectedYear, expectedMonth, expectedDate)
    
        }) // End It Block

    }) // End first Context Block

    context('Select Dates in current Year which is 2020', () => {

        it('Select a date 3 months before - \'10 April 2020\'', () => {

            expectedMonth = 'April'
    
            // To open Date Picker Calendar
            cy.get('div input#datepicker1').click()
            // For Navigating to Expected Month
            cy.navigatingBackward(3)
            // For Selecting Expected Date
            cy.contains('div#ui-datepicker-div table tr td a', expectedDate).click();
            // To open Date Calendar
            cy.get('div input#datepicker1').click()    
            // Assertions
            cy.verifySelectedDate(expectedYear, expectedMonth, expectedDate)
    
        }) // End It Block

        it('Select a date 3 months ahead - \'10 October 2020\'', () => {

            expectedMonth = 'October'
            // To open Date Picker Calendar
            cy.get('div input#datepicker1').click()
            // For Navigating to Expected Month
            cy.navigatingForward(3)
            // For Selecting Expected Date
            cy.contains('div#ui-datepicker-div table tr td a', expectedDate).click();
            // To open Date Calendar
            cy.get('div input#datepicker1').click()
            // Assertions
            cy.verifySelectedDate(expectedYear, expectedMonth, expectedDate)
    
        }) // End It Block

    }) // End 2ndlast Context Block

    context('Select Dates in current Century which is 21st', () => {

        it('Select a date in previous Year - \'10 November 2019\'', () => {

            expectedYear='2019', expectedMonth = 'November'
    
            // To open Date Picker Calendar
            cy.get('div input#datepicker1').click()
            // For Navigating to Expected Year & Month
            cy.navigatingBackward(8)
            // For Selecting Expected Date
            cy.contains('div#ui-datepicker-div table tr td a', expectedDate).click();
            // To open Date Calendar
            cy.get('div input#datepicker1').click()
            // Assertions
            cy.verifySelectedDate(expectedYear, expectedMonth, expectedDate)
    
        }) // End It Block

        it('Select a date in next Year - \'10 February 2021\'', () => {

            expectedYear='2021', expectedMonth = 'February'
    
            // To open Date Picker Calendar
            cy.get('div input#datepicker1').click()
            // For Navigating to Expected Year & Month
            cy.navigatingForward(7)
            // For Selecting Expected Date
            cy.contains('div#ui-datepicker-div table tr td a', expectedDate).click();
            // To open Date Calendar
            cy.get('div input#datepicker1').click()
            // Assertions
            cy.verifySelectedDate(expectedYear, expectedMonth, expectedDate)
    
        }) // End It Block

    }) // End last Context Block

}) // End Describe Block