**Calendar Functionality Verification with Cypress**
This project contains automated tests to verify the functionality of a date picker calendar on the "Datepicker" page of the demo automation testing website. The tests ensure that the 
correct dates can be selected and validated within various contexts.

**Prerequisites**
Node.js (v12 or higher)
npm (v6 or higher) or yarn

**Test Structure**
The test script is organized into three main contexts, each focusing on different aspects of date selection:

**Initial Date Setup:**
Sets the initial date to '10 July, 2020'.
Prepares expected year, month, and date for verification.

**Select Dates in Current Month (July 2020):**
Test Case 1: Selects a date before yesterday ('08 July, 2020').
Test Case 2: Selects a date after tomorrow ('12 July, 2020').

**Select Dates in Current Year (2020):**
Test Case 1: Selects a date 3 months before ('10 April, 2020').
Test Case 2: Selects a date 3 months ahead ('10 October, 2020').

**Select Dates in Current Century (21st Century):**
Test Case 1: Selects a date in the previous year ('10 November, 2019').
Test Case 2: Selects a date in the next year ('10 February, 2021').

**Custom Commands**
**cy.navigatingBackward(months):** Navigates the date picker calendar backward by the specified number of months.
**cy.navigatingForward(months):** Navigates the date picker calendar forward by the specified number of months.
**cy.verifySelectedDate(year, month, day):** Verifies that the selected date matches the expected year, month, and day.

Let’s continue to grow together as we strive for excellence in our development and testing practices. If you have any questions, suggestions, or improvements, don’t hesitate to 
reach out or contribute.

**Here’s to successful testing and continuous improvement**
