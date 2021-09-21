## Table of contents:
 [Project Goals](#Project-Goals)
* [User Expierence](#User-Expierence)
    * [Site owner goals](#site-goals)
    * [User Stories](#User-Stories)
    * [First Time Visitor Goals](#First-Time-Visitor-Goals)
    * [A Returning Visitor Goals](#Returning-Visitor-Goals)
* [Design](#Design)
    * [Wireframes](#Wireframes)
    * [Colors](#Colors)
    * [Typography](#Typography)
    * [Imagery](#Imagery)
* [Features](#Features)
* [Features](#Future-Features)
* [Technologies](#Technologies)
    * [Languages](#Languages)
    * [Frameworks & Tools](#Frameworks-&-Tools)
* [Testing](#Testing)
    * [Validation](#Validation)
    * [Performance](#Performance)
    * [Responsivness](#Responsivness)
    * [Accessability](#Accessability)
    * [Known Issues and Bugs](Known-Issues-and-Bugs)
* [Deployment](#Deployment)
* [Credits](#Credits)
* [Awknowledgments](#Awknowledgments)

## Project Goals:
  Give players an opportunity to practice their Blockchain knowledge and compete for the highest score. This game contains questions for beginner, intermediate and advanced and the aim of the game is to help players gain knwledge and showcase their Blockchain knowledge. It is suitable for anyone who wants to learn about the blockchain, has minimum knowledge but wants to learn more or for those studying and working with blockchain

## User Expierence: 
### Site goals:
**Site Owners Goals:** 
* As a site owner I want to create an attractive, responsive and easy to use game for the user.
* As a site owner I want the site to work as intended, loading new questions and incrementing the score as the user progresses with a count timer for each question.
* As a site owner I want create game with a varied choice of questions
* As a site owner I want users to be able to save their score
* As a site owner I wants users to navigate easily through different pages of the site

### User Stories:

**First Time Visitor Goals**
* As a first time visitor, I want the game to be attractive and easy to read.
* As a first time visitor, I want the game to be responsive to whichever device I am playing it on.
* As a first time visitor, I want to be able to navigate around the different pages of the site.
* As a first time visitor, I want to be able to learn how the game works.
* As a first time visitor, I want to be given a choice of varied questions.

**Returning Visitor Goals**
* As a returning user, I want to be given varied questions each time I play.
* As a returning user, I want to be able to record my score and try to get on a leaderboard.
* As a returning user, I want to see other users' previous scores so I can try to beat them.

## Design:
* The design of the website was chosen with the topic in mind. It was designed to be visually pleasing for the game players with an easy UX to guide players to the different elements. This was achieved by using 2 block colors with contrasting hover effects. The theme was kept consistent throughout each web page.

### Wireframes

* Balsamiq was used the create the wireframes for desktop, mobile and tablet.
* The finished website is the same as the original wireframes. 

* The links to each one can be found here:
   * [Desktop](docs/wireframes/Desktop-wireframe.JPG)
   * [Mobile](docs/wireframes/Mobile-wireframe.JPG)
   * [Tablet](docs/wireframes/Tablet-wireframe.JPG)

### Colors

* I created a colour scheme of blue(#56a5eb) and navy(#0b0e1e) which were from the backgroud image. Blue and navy are bold string colors and compliment the blockchain theme. Blue is the branded color for the blockchain.
![Color Scheme](/docs/features/colors.JPG)

### Typography 
I chose 'Rubik' from Google Fonts. I chose this font because:
  * The bold weight and sharp edge works well with for the blockchain theme.
  * It's also a sans-serif font which is more accessible for people with dyslexia. Sans-serif is the back-up font if Rubik fails.

### Imagery
* This website has one image as the main background across each page. It is a dark image with blue blockchains. This image was used as it complement the website theme and didn’t detract from the game.

## Features

**Home Page**
* A modal for the user to click to see how to play the game 
* A play button that for the user to start the game
* A highscores page where the user can compete to get on the leaderboard.
* Social media links, the websites creators github and linkedin were chosen to for portfolio purposes

**Game Page**
* A question counter that shows the user which question number they are on out of 10.
* A score counter that increases the users score by 10 for each question they get right.
* A question and 4 possible answers to choose from. The selected answer will turn red if it is wrong and green if it is correct.
* A 30 second timer that counts down on screen and resets for each new question and moves to the next question when the answer is chosen.
* A home button that will take the user back to the main page.
* A spinning loader is displayed briefly on screen before the questions are loaded.

**End Page**
* A record of the users score is shown
* An option for the user to enter their name and save their score, the score will be shown on the highscores page if it high enough 
* A button to let the user play again.
* A button to take the user back to the home page.

## Future Features*

* Introduce levels of difficulty to the game
* Add sound to the game that matches their score, e.g. a winning sound for above 70% and a fail sound for under 40% and an encouraging sound for the middle score.
* Take the user to the highscore spage when the submit their score
* The option for the user to share their score on social media

## Technologies used
### Languages used

* [HTML5](https://en.wikipedia.org/wiki/HTML5)
   * The project uses HTML5 to make up the basic elements and structure of the website.

* [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS)
   * I have used CSS3 to add my own custom styling and to change default bootstrap styling where and when needed.

* [JavaScript](https://en.wikipedia.org/wiki/JavaScript)
    * JavaScript has been used to implement the site's interactive features, Allowing the user to be interactive with the game.

### Frameworks, Libraries and Programs Used

* [Bootstrap 4.6](https://getbootstrap.com/docs/4.6/getting-started/introduction/)
   * The Bootstrap framework was used to help build the responsive structure of the site and add default styling.
   * It was also used to import JavaScript and Jquery which was used for the modal.

* [Google Fonts](https://fonts.google.com/)
   * Google fonts were used to import the 'Rubik' font into the style.css file which is used on all pages throughout the project.

* [Font Awesome](https://fontawesome.com/)
   * Font Awesome was used on the index.htm page and the game.html page on the website to add icons for aesthetic UX purposes and visual aid purposes. 

* [jQuery](https://en.wikipedia.org/wiki/JQuery)
   * jQuery came with Bootstrap to make the modal responsive.

* [Git](https://www.gitpod.io/)
   * Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.

* [GitHub](https://github.com/)
   * GitHub is used to store the project's code after being pushed from Git.

* [Balsamiq](https://balsamiq.com/)
   * Balsamiq was used to create the wireframes during the design process.

* [Google Chrome Developer Tools](https://developer.chrome.com/docs/devtools/)
   * I used Google chromes built in developer tools to help with the styling of the site, selecting colors and to troubleshoot any bugs I found.

* [Am I responsive](http://ami.responsivedesign.is/)
   * This was used to check responsiveness on different screen sizes and create the showcase image for the project.

* [Google Lighthouse](https://developers.google.com/web/tools/lighthouse)
   * I used Google lighthouse to test the performance of my site.

* [The W3C Markup Validation Service](https://validator.w3.org/)
   * I used this validation tool to check my HMTL for errors.

* [The W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/)
   * I used this validation tool to check my CSS for errors.

* [Color contrast](https://wave.webaim.org/report#/https://tararhoseyn.github.io/CardiffSwimCentreMS1/)
   * I used this tool to compare colors for the website.

## Testing
### Validation
The [W3C Markup Validator](https://validator.w3.org/) and [W3C CSS Validator Services](https://jigsaw.w3.org/css-validator/) were used to validate both pages of the project to ensure there were no syntax errors in the project.

* W3C Markup Validator index.html - [Results](/docs/testing/index-validation.JPG)
  * The index.html passed with 0 error

* W3C Markup Validator game.html - [Results](/docs/testing/game-validation.JPG)
  * The game.html passed with 1 error for and empty <h1></h1>. This needs to remain emaply so the question counter can work when answers are choosen

* W3C Markup Validator end.html - [Results](/docs/testing/end-validation.JPG)
  * The end.html passed with 0 error

* W3C Markup Validator highscores.html - [Results](/docs/testing/highscores-validation.JPG)
  * The highscores.html passed with 0 error

* W3C CSS Validator - [Results](/docs/testing/css-validation.JPG)
  * The CSS passed with 0 errors

### Performance
* [Google Lighthouse](https://developers.google.com/web/tools/lighthouse/) was used to measure the performance and speed of the website. 
   * Performance was 100% for desktop 
   * Perfromance was 91% for mobile

* Click on the page name to see the results for Desktop: [Home](docs/testing/index-lighthouse-desktop.JPG) | [game.html](docs/testing/game-lighthouse-desktop.JPG) | [End.html](docs/testing/end-lighthouse-desktop.JPG) | [Highscores](docs/testing/highscore-lighthouse-desktop.JPG)

  * Click on the page name to see the results for mobile: [Home](docs/testing/index-lighthouse.JPG) | [game.html](docs/testing/game-lighthouse.JPG) | [End.html](docs/testing/end-lighthouse.JPG) | [Highscores](docs/testing/highscore-lighthouse.JPG) 

### Responsiveness
* The website was tested using  desk the 'inspect' option availabale on Google and Internet explorer for differnt screen sizes and mobile. The following devices showed zero errors with responsiveness or format. 
* Devices:
  * Samsung Galaxy S20 
  * iPhone X
  * iPhone 11
  * Lenovo IdeaPad S340-14IIL
  * Samsung A70
  * Toshiba satellite 

### Accessability
* [Google Lighthouse](https://developers.google.com/web/tools/lighthouse/) gave the website a score of 91% accessability for both [desktop](docs/testing/index-lighthouse-desktop.JPG) and [mobile](docs/testing/index-lighthouse.JPG) 


## Known Issues and Bugs
* The highscores page only loads the scores of user, users cannot see other players highscores. This was discovered during the testing stage that I carried out with friends.
* There is an issue with the spinning loader being displayed when the game is loading and when there is a delay between moving to the next question. 
* For some questions on dekstop the prgress bar shows a little gap that shows the background color under the top margin, this is something minor that I would like to solve.

## Deployment

**Creating Repository**
1. I created the repository using the following steps:
2. I logged into my GitHub account and clicked the green button near the top left of the page displaying the text 'NEW'.
3. This took me to a page with the option to create a new repository. Under the repository template I clicked on the code institute template. 
4. I chose a name for my repository and then clicked the create repository button.
5. I opened the new repository and clicked the green gitpod button to create a new workspace in Git Pod for writing and editing my code to develop the website.

### GitHub pages

**My project was deployed to GitHub pages using the following steps:**

1. I logged in to my GitHub account and opened the relevant repository.
2. I clicked on the settings button.
3. In settings I scrolled down to the GitHub 'pages' tab.
4. Under source I clicked the dropdown button labelled 'None' and selected Master Branch.
5. This then provided mw with the link to the website.

### Forking the GitHub Repository
1. Log in to GitHub and locate the [GitHub Repository](https://github.com/vanessacleary/vanessacleary-Ms1-2021)
2. At the top of the Repository just above the "Settings" Button on the menu, locate the "Fork" Button and click.
3. This will provide you with a copy of the original repository in your GitHub account.

### Making a clone
1. To make a clone of my project use the following steps.
2. Go to my account and locate the relevant repository.
3. Next to the green Gitpod button, click on CODE.
4. Click on Download Zip.
5. Once downloaded, you can extract the zip file's contents and save to a desktop and run the website locally.

## Credits

**Images:**
  * Background image was taken from [google images](https://www.google.com/imghp?hl=en)

**Quiz Questions**
  * [Data-flair](https://data-flair.training/blogs/blockchain-quiz-test-knowledge/) Quiz 1, 2 & 3. 
  * [edureka](https://www.edureka.co/blog/interview-questions/blockchain-interview-questions/#Multiple_Block)
  * [quizizz.com](https://quizizz.com/admin/quiz/5b30675680a91b0019d30026/ibs-02-smart-contract-solidity-assessment)

**Spinning Loader**
  * [W3schools](https://www.w3schools.com/) was used to help build the spinning loader displayed before the questions were loaded.

**Display**
  * [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) was used to help structure and display the layout of the game.

**Tutorials**
  *  [James Q Quick](https://www.youtube.com/playlist?list=PLDlWc9AfQBfZIkdVaOQXi1tizJeNJipEx) YouTube course was used to help me create this game. It provided a strong foundation to build on to help me achieve the results I wanted. 

## Acknowledgements

* Code Institute for providing endless help and resources to get me this far.
* My mentor Reuben Ferrante for the help and patience to guide me through my first interactive-frontend project.
* The Mini Feb 2021 group, wider slack community and the tutors for all the help, support and feedback for the last couple of weeks with a special mention to [Ashley Buy](https://github.com/Ashb87) 
* Friends and Family who have taken their time to offer advice and feedback during the development of my project.
