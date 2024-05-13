![Quizzer Devices Mockup](/assets/images/readme-images/mockupquiz.png)

# Quizzer readme!
Quizzer is a simple quiz game with 3 different difficulties.

I aim to provide a easy to play quiz game, simple to understand and straight forward to some fun, a nice eye-cathing layout with radiant colors over a dark background.

## Link to landing page
[QUIZZER](https://valerios05.github.io/pj2Quizzer/)

## Getting started

- ### First things first...Exploring Quizzer
    - #### Index.html it`s the landing page
      - We got 3 More pages reachable from the landing page
      - Easy.html
      - Normal.html
      - Hard.html
      - [jump to structure](#structure)
    - #### 1 assets directory
      - The assets contains:
        - CSS containing the style.css file 
        - [user interface](#ui)
        - images 
          - images contains 2 folders 
          - a folder for favicon
          - a folder for the readme file
          - images for the page are found inside the image folder
         - js containing 2 javascript files
          - home.js used for landing page
          - quiz.js used for the actual quiz 
    - #### readme.md 
      - The readme file is for guidance and presentation
      - [Click this link to jump Usage/Validation/Credits](#usage) 
  
## Skeleton
- In this section I will show what was my idea starting to build the project
### Wireframe of landing page.
  - Structure doesn`t change for different screens only sizes are different.
  - The first thing is the title with a favicon
  - We can see the logo position at the centre of the page
    - The landing page doesn't provide a heading because it's a very simple page
  - Next we have a label and relative input field used to get the user name
  - At the end of the frame , a simple copyright footer
![Skeleton of landing page](/assets/images/readme-images/frame.png)
---
#### Final result
  - The landing page is exactly how was pictured in the frame.
  - The only difference is the added "submit" button that is hidden , available only if the user inserted a valid username. 
  It's very simple but straight forward to an easy understand.

### First popup
- The first popup appears once the user inserted username
- The pop up is presented with an overlay, mantaining the landing page in the background with less visibility, giving the popup a sense of priority
- At first we have greeting to user(with username inserted).
- Second we have multiple buttons (3) used to select the level
![First popup](/assets/images/readme-images/levelpop.png)

### Second popup
- The second popup appears once the user gets redirected to level pages.
- In this popup I gave to the user a clue of how the quiz will work(rules)
- Under the rules we'll see a "start" button that will let the quiz start (countdown on, question and answers displayed)
![Second popup](/assets/images/readme-images/getready.png)
#### Final Result
  - The actual structure of the popup is exactly as the frame shows.
  - The only difference stands on the level buttons, I used links to redirect the user to the selected page.

### Level pages
- The level pages contains all that the actual quiz needed:
  - We have two counters and a timer at the top.
  - Going under we can see the quit button and the score.
  - A question is displayed under the score with the related answers
  - Differences between screen sizes are how the answers are displayed, as columns for mobile and small tablets or displayed horizontally as two rows for larger screens.
- Wireframe for larger screens.


![Larger screen sizes quiz](/assets/images/readme-images/quizlarge.png)

- Wireframe for smaller screens


![Smaller screen sizes quiz](/assets/images/readme-images/quizmobile.png)
#### Final Result 
- The level pages at the end of the deployment are very similar to what the idea was when wireframes were made
- The main difference is that we have a new element added , the `header` tha displays the level of the page giving a clue to the user where his position is at the moment.
- The other difference is where the `Quit` button is, in the wireframes we can see it on top between the timer and the score. In the final result we will have it at the bottom of the quiz.
  - I opted for the bottom just to follow a natural structure, it was just out of place in the middle of the quiz display.  
##  Features

### 1. Favicon
- Favicon created from [favicon.io](https://favicon.io/favicon-generator/)
- ![Favicon](/assets/images/readme-images/favicon.png)
### 2. Logo
- The page has a logo representing an identifier for the website.
### 3 Personalization
- The user can insert a personal username, facilitating personalization
### 4 Popups
- The site uses Popups to direct the user through the quiz making easier the navigation
### 5 Game modes
- Three different levels 
### 6 Countdown timer
- Used to enhance the user experience and give a sense of urgency or deadline
### 7 Visual Feedbacks
- Provided the user with visual feedbacks when answering the question. Mainly color feedback where correct is green and wrong is red. 
- Provided counters tha dynamically updates the user on their progress in real time.
- Provided a score counter, real-time feedback over the user performance through the quiz
### 8 Results
- Once quiz is completed the users receive detailed results including a feedback over the perfomance
- the total score 
- the time used to complete the quiz
### 9 Responsive Design
- Quizzer is designed to be responsive, contains 3 different way of layout depending on the devices width.
- Mobile first layout,going to tablets and larger screens like laptops.
- Differences in layout are for screens with width of 600px or larger 
- Changes again with 1200px or larger
### 10 Accessibility
- The quiz can be played without using a mouse, (I played the game several times using only Tab and Enter keys.)
- It follow the layout of the pages, the source code is made using clear and understandable text, label preced the username input, links have a clear destination and added aria-labels.
- Images have alternative text.
- Good contrast between emelents, dark backgrounds with bright text or revese.
## Scope

### Audience 
- The quiz is suited for general audience, depending on the difficulty
- The easy mode is open to everyone looking for a quiz game
- The Normal and Hard mode requires more knowledge but are still open to whoever wants a bit more challenging questions
#### User stories
- As a quiz lover
  - I would like a quiz easy to play and have some fun testing my knowledge.
  - I want to challenge myself with diffent levels
  - I want to get the highest score
    - Quizzer offer an easy and quick way to play a quiz game, and offers different difficulties.
- Casual gamer
  - I want to play a quiz game during my free time to have some fun and chill.
  - I want to quickly change the level Im in.
    - Quizzer offer a quick quiz game easy to go through , in pages level we find a quit button the bring us back to home page to start again to play.
- As a parent
  - I can introduce my child to education , with a quiz game that is entertaining and informative.
  - I want a quiz that is easy for a kid to play and interactive.
    - Quizzer offers easy question that are kid friendly and feedback images to help understand of what is going on during the quiz.
### Objective
- The purpose of Quizzer is to offer an experience designed to challenge the user knowledge across three different difficulty levels.
Doesn't matter if the user is a learner, a trivia seeker or a persone only looking for fun. Quizzer has it for everyone.
  - Level Easy
    - To start the journey ,easy level is the perfect one for a relaxed experience,
with a mix questions covering different topics that most people have knowleadge of.
Can say it is pretty accessible to anyone
  - Level Normal
    - The Normal level it's a step up. the questions become a bit more difficult to answer ,requiring a deeper understanding of various topics.
The normal level is still accessible to anyone that want to challenge a thougher trivia
  - Level Hard 
    - This level is more for seasoned user with a larger knowledge of various topics.
  Anyone can play the quiz but not everyone can get a positive result!
  - Learning when you play.
    - Quizzer is not just a game, it offers entertainment and education.
  It broads your knowledge in a friendly and light enviroment wheter you play for fun,learning or competition.

### Difficulty , Questions Answers 
- The questions don`t follow a singular topic but more of general knowledge
- One question at a time with a number of answers
- 2 answers for easy mode ( very easy question)
- 3 answers for normal mode (simple questions)
- 4 answers for hard mode (tougher questions)

## UI

### Palette
- The color scheme is centered on black backgrounds, with some greenyellow and red as highlighters creating contrasts and visually striking design.
### Logo
- The logo is visible in the landing page and as a favicon. The colors of the logo are a linear gradient going from Green to blue,red and Yellow. Represented as a game device with a pair of "mustaches" that resemble a "face".
---
![Quizzer logo](/assets/images/readme-images/rmdLogo.png)
### Popups
- The popups are similar regarding colors and fonts diverging only content wise and sizes. I used a transparent overlay and box shadows to let the user understand what are we focusing in that specifing moment giving a smoother experience. 

### Images
- I used images containing the usual thumb up for positive answers and thumb down for negative answers. Diverging also in color , green when positive and red when negative
---
![Thumb up](/assets/images/readme-images/redmeThumbUp.png)
![Thumb down](/assets/images/readme-images/redmeThumnDown.png)
---
### Color Feedbacks
- As mentioned in images , i tried to give the user a meaning to the colors used during the quiz, red means wrong ("negative") green means well done! ("positive").
We have these two colors on repeat , i used them for the answer buttons, where correct answer button changes to a green button or changes red otherwise.
I used a green counter for correct answers and a red counter for wrong answers.

![Correct answer](/assets/images/readme-images/correct.png/)
---
![Wrong answer](/assets/images/readme-images/wrong.png)

## Structure
![Quizzer structure](/assets/images/readme-images/structure.png)
### Index.html (Landing page)
- The home page of Quizzer has a simple structure
  - At first impact we have the logo as hero image smaller in size for mobiles and larger for larger screens
  - Under the logo we have a label for the username input.
  ---
  ![Home page](/assets/images/readme-images/homepage.png)
  ---
  - `Hidden` in the home page we have a popup triggered when the user submit the chosen username
    - The popup contains greetings to the user and puts you to choose the game mode.
    - The difficulties are displayed with styled links in a column going from easy to hard respectively.
  ---
  ![Home page popup](/assets/images/readme-images/firstpop.png)
  ---
  - Ending with a footer containing copyright.
  - `Scripts`
    - The home.js file handles the scripts in the index.html
    - Mainly handles the username input, making sure the user uses only letters and numbers. If the username is viable the script will show the button to continue, or listening if the user uses the Enter key.
    - Also we have the script that handles the popup (display settings and insterting the username in the greetings) and the levels links.
### Easy/Normal/Hard
- The levels pages have same html structure and style, diverging only in some details that help identify in which page we find ourselves in.
- The first thing we see is a popup triggered from the complete load of the document.
  - The popup consist in 2 brief sentences, getting ready the user and a simple explanation of what the user can expect.
  - At the bottom of the popup there is a start button created to trigger the timer, once clicked the actual quiz starts.
---
![Start popup](/assets/images/readme-images/startpop.png)
---
- At the top of the page we have a header with a simple heading displaying in which page we are at the moment
- Under it we have 2 counters (they keep track of correct/wrong answers) surrounding the timer.
- Going down we have the score 
- Under the score we see displayed the question with a number of answers depending on the difficulty chosen.
---
![Quiz page](/assets/images/readme-images/quiz.png)
---
- Ending the page we have the quit button.
  - `Hidden` in the page we have 2 images (thumb up/down) that we can see only when a question is answered
  - `hidden` also we have the results triggered that the end of the quiz.
  - The result is structured with almost plain text displaying greetings a feedback with score and timing with a home button.
---
![Quiz result](/assets/images/readme-images/result.png)

---
- `Scripts`
  - The script quiz.js handles the level pages
    - We have a total of 19 functions that handle step by step the user journey.  
    - The main functions are :
      - Waiting the page to be fully loaded before starting.
      - Timer function 
      - The quiz function , that handles most of the quiz (Checking which array will be used , displaying a relative random question and answers and the end of the quiz)
      - Correct or wrong answers function, checking the answers and reeacting accordingly
      - To end with the results function, displaying the overall performance.
#### Scripts note
- Both pages are heavily commented , the script is presented with a general comment if a function.
- All the content of functions or others small bites of code are followed by comment on the right hand side of the page. This made the development of my project stable and help me to keep track and understand what the script was created for and how it`s purpose. 
## Usage

- At first we have the landing page where we can insert our `username`.  
- Once the username is inserted we can confirm it pressing the `enter` key or the `let's go` button.  
- A pop up will appear giving `3 level options`.  
After clicking on one of the options we are redirected by hyperlink to the page chosen.
- When redirected we are presented with a `get ready` popup containing a `start` button.  
- Once pressed the start button will trigger the quiz starting the `countdown`, and the only thing left is to answer the questions presented to you.  
- During the quiz there is always a `quit` button present so you can stop the quiz anytime.
- Only after the quiz is completed we are presented with the `results` of our performance with a `home` button redirecting us to the home page to start again.

## Future Feature
- `Progress tracking`
  -  Implement a feature that tracks the user progress(performance, highest scores,faster 100% correct).
-  `Multiple languages`
     -  Making the  quiz game accessible to a bigger audience using different languages.
     -  
- `Multiplayer` 
  - Where users can challenge themselves in real-time (live score, synchro gameplay,).
- `Specific Quizzes`
  - Different quizzes with one topic each (one for history, one for science etc..).
- `Gaming rewards and rankings`
  - Levels for overtime players, rewards ,badges ,titles for top scores.
- `Identification`
  - User will be recognized when returning to play Quizzer.  
## Bugs and Fixes
- 1  `bug` The user could just press "enter" in the username input and jump the validation (required, and only numbers and letters).
    - `solution` Modified the script to trigger the validation over the keypress
- 2 `bug` When answering a question the user could still press the button during the 1 second interval, adding points to the score
  - `solution` Added a disabler to eventlistener on click for the answer buttons and set a color to correct or wrong answer clicked to confirm selection and stop other buttons to be functional for that second.
- 3 `bug` Answer buttons were added instead of being replaced due to mistake in the script (I was getting the element by class name getting only the first element)
  - `solution` Created a function that iterates trough each answer button to make sure answer buttons were cleared before displaying the new answers(append child buttons).
- 4 `fix` The questions and answers were displayed always on the same position (same as how the array of object is written) making it easy to remember where the answer was.
  - `solution` I created a function to make question and relative answers to be displayed always at random using fisher-yates algorithm and math.random().
- 5 `fix` quiz.js During the initial creation of the quiz.js I recognized that the structure of my scripts was getting me nowhere and was confusing for me
  - `solution` I saved my file to be able to reuse some of the code already written. I reformatted the script diving a huge function in smaller blocks. This made the file more readable and understandable for me and for everyone else.
- 6 `fix`During the construction and testing of the site I used a header displaying quizzer but it looked very bland and repeated
  - `solution` I opted to keep only the logo that contains the name functioning as a heading giving clear identification to the page. 

## Validation
- For CSS I used https://jigsaw.w3.org/css-validator/validator

![Css validation](/assets/images/readme-images/Screenshot%202024-05-11%20172039.png)
- For HTML I used https://validator.w3.org/

![HTML validation](/assets/images/readme-images/Screenshot%202024-05-11%20172227.png)
- For JS  I used https://jshint.com/
  - Test on home.js 
![jshint test 1](/assets/images/readme-images/jshint1.png)
  - Test on quiz.js
![jshint test 2](/assets/images/readme-images/jshint2.png)
- Lighthouse check for landing page
  
![light house scores](/assets/images/readme-images/lighthouse.png)

- Lightouse check for level pages

![lighthouse score level pages](/assets/images/readme-images/lighthouselevels.png)

## Testing 
- The site has been tested on different devices.
  - Devices  
    - Iphone 11 pro max
    - Ipad mini
    - Ipad air
    - Samsung s8+
    - Samsung 22+
    - Samsung tablet a5
    - 44' Tv monitor
    - 24' Tv monitor
    - ROG STRIX G16
    - In any davice the proportion are well mantained due to media query use, smaller sizes for smaller screens and bigger sizes for larger screens.
  - Browsers
    - Google Chrome 
    - Microsoft Edge
    - Mozilla Firefox
    - Opera
    - Mainly used Chrome for testing with dev tools

### Testing screenshots 
- The screenshots used in precedence throught this readme are taken from mobile device
- Landing page on different devices (this is how the actual landing page is shown in different devicees)
   


- Developer tools responsive test, all the listed devices have been checked.

![Tesing from DevTools](/assets/images/readme-images/testingdevices.png)

- Results from tablet prospective. The result page is consistent in all the devices with no major changes. The same can be said for the popups , used consistend structure and style with no major changes.

![Tablet test](/assets/images/readme-images/resulttablet.png)

- Test on 24' monitor. As we can see the page doesn`t follow anymore a complete column display. In larger screens the answers are adapted to wrap and take more horizontal space.

![large monitor test](/assets/images/readme-images/large.png) 

- Contrast test with [Wave.webaim](https://wave.webaim.org/)

![Contrast test](/assets/images/readme-images/contrast.png)

## Manual testing

| Landing Page  | test | Notes |
| --- | :---: | :---: |
| Responsiveness | ok | No errors from scripts or issues displaying the page  |
| Input field  | ok | Place holder works, User can input only Alphanumerical, Username is stored|
| Let`s go Btn | ok | Appears only when user input alphanumerical characters, interact with following popup correctly|
| Choosing levels popup | ok  | Popup appers correctly, overlay cover partially background, Text and links are displayed correctly |
| Level links | ok | User gets redirected correctly when pressing on one of the choises |


| Level pages | test | Notes |
| --- | :---: | :---: |
| Responsiveness| ok| Page loads correctly with no errors, if page not recognized user will have feedback |
| Rules popup | ok | Appears correctly after user got redirected and page is loaded |
| Start button | ok | Popup dissapear when button is pressed, Quiz displayed correctly |
| Counters | ok | Displayed correctly and set to 0 |
| Timer | ok | Displayed text and running correctly a countdown |
| Score | ok | Set to 0 initially|
| Question | ok | A random question is displayed , correct question based on level chosen |
| Answers | ok | Number of answers depending on level are correct for every page, answers are correctly related to question displayed. When user answer the question background changes color (red/wrong green/correct), answer disabled after user choise, score increment after user choise, next round displayed correctly|
| Quit | ok | Redirect correctly to home page |
| Result | ok  | Appears when user answered all questions, Username displayed correctly, Correct feedback based on performance displayed correctly, Correct score, Correct time used to conclude the quiz |
| Home | ok  | Displayed correctly, redirect user to homepage |
---  


## Deployment  
### Github
- The site is hosted and deployed with Github.
#### How to deploy
- Step by step deployment
  - Get into `Github`
  - Access the Github `Repository`
  - Select `Settings`
  - On the left side we need to get into `Pages`
  - We will see `Build and deployment`.
  - Under the `Branch` select `main`
  - Click `save`
  - If correctly executed the page will indicate the succesful `deployment` and the link related.

#### Git
- Quizzer has been built via Git commands
- Git `add/commit/push`

#### Clone to your local machine
- From repository on Github click the green button `Code` 
- After clicking you will see `Clone`
- You can `download Zip` and extract files to run locally via browser.
- Or cloning via `Git` with `HTTPS`
- To clone via Git make sure you select the directory where you want to hold your repository using for example Bash commands in the terminal to navigate.
  - `Bash commands`
   
  | Command | Note |
  |---|---|
  | pwd | Display current working directory |
  | cd | change directory |
  | ls | list of contents in current directory|
  | mkdir| Create new directory |
  | touch | Create new file |
  - You can refer to bash manual to get more info about commands. 
---
- Use `git clone` with the HTTPS seen on previous steps.
- Once you run the command you will see `example`: Cloning into `My-repo`...
- To verify if succesful you can use in the terminal the command `ls`.
- This will show you the list of folders and files in the directory. 


## Credits
    - Favicon created with favicon.io
    - Fonts are taken from GoogleFonts (fonts.google.com)
    - Image thumb up/down taken from Pixabay.com
    - Logo created from Freelogodesign.org
    - Some of the question/answers were taken from Opinionstage.com
    - Wireframes created with Wireframe.cc
[Pixabay thumb up](https://pixabay.com/vectors/thumb-up-thumb-yes-okay-up-vote-297078/)

[Pixabay thumb down](https://pixabay.com/vectors/icon-pictogram-pictograph-2027661/)

---
[comeback to top](#quizzer-readme)