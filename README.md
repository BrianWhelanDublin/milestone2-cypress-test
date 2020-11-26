# Cypress Testing For Milestone 2 Project.

This code uses [Cypress](https://www.cypress.io/) to run tests on my Milestone 2 project for Code Institute Full Stack Developer course.

I have developed this code using [Visual Studio Code](https://code.visualstudio.com/).

 - To start I created the repository on Github 

 - I then cloned the repository by the following method:

   1. On the Github repository I click the code button.
   2. I then clicked the SSh button and copied the link.
   3. Using my terminal on Visual Studio Code I used the cd command to navigate to where I wanted to store the repository.
   4. I then typed the ``` git clone ``` command followed by the link I had copied to clone the repository.

  -  I then ran  ```  npm init ``` 
to install the dependencies needed for cypress.

  -  Then to install cypress as a dev dependency for this project i ran  
    -   ``` npm install cypress --sav-dev ```

  -  To write my tests I  first created files in the cypres/integration folder.

  - I used git to commit the files and test's while developing, and GitHub to store them.

  -  Once the test had been written to run them I typed 
   - ``` ./node_modules/.bin/cypress open ```
 
  -  This then opened the cypress test runner and ran the test in the browser.

## Test Files 

  - The test's are contained in the following files.

    -  Homepage: cypress/integration/homepage-tests.js

    -  Navigation: cypress/intergration/navigation-test.js

    -  Destinations: cypress/integration/destinations-test.js

    -  Booking: cypress/integration/booking.js

    -  Footer: cypress/integration/footer-test.js

## Technologies Used

   -  [javaScript](https://en.wikipedia.org/wiki/JavaScript)

       - javaScript was used throughout to write the tests.

  - [Git](https://git-scm.com/)

     - Git was used as a version control in the terminal.

  - [Github](https://github.com/)

     - Github was used to create and store the project repository.

  - [Cypress](https://www.cypress.io/)
    
     - Cypress was used to write and execute automated tests for the page.

 -  [Visual Studio Code](https://code.visualstudio.com/).

    - I used Visual studio code to write and develop the tests.