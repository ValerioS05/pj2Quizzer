# Welcome to Quizzer readme! Quizzer is a simple quiz game with 3 different difficulties.

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
          - images contains 3 folders 
          - a folder for favicon
          - a folder for the readme file
          - a folder for the images used for the pages
         - js containing 2 javascript files
          - home.js used for landing page
          - quiz.js used for the actual quiz 
    - #### readme.md 
      - The readme file is for guidance and presentation
      - [Click this link to jump at the end of the readme](#usage) 
  
  

##  Features

### 1. Favicon
- Favicon created from [favicon.io](https://favicon.io/favicon-generator/)
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
---

 ![Quizzer Devices Mockup](/assets/images/readme-images/mockupquiz.png)
## Scope

### Audience 
- The quiz is suited for general audience, depending on the difficulty
- The easy mode is open to everyone looking for a quiz game
- The Normal and Hard mode requires more knowledge but are still open to whoever wants a bit more challenging questions
#### User stories
- As a quiz lover
  - I would like a quiz easy to play and have some fun testing my knowledge
- Casual gamer
  - I want to play a quiz game during my free time to have some fun and chill
- As a parent
  - I can introduce my child to education , with a quiz game that is entertaining and informative.
### Objective
- The purpose of Quizzer is to entertain the user , with a pinch of educational purpose.
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
- The logo is visible in the landing page and as a favicon. The colors of the logo are a linear gradient going from Green to blue,red and Yellow. Represented as a game device with a pair of mustaches that resemble a "face".
---
![Quizzer logo](/assets/images/readme-images/rmdLogo.png)
### Popups
-The popups are similar regarding colors and fonts diverging only content wise and sizes. I used a transparent overlay and box shadows to let the user understand what are we focusing in that specifing moment giving a smoother experience. 

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
- 1  The user could just press "enter" in the username input and jump the validation (required, and only numbers and letters).
    - `solution` Modified the script to trigger the validation over the keypress
- 2 When answering a question the user could still press the button during the 1 second interval, adding points to the score
  - `solution` Added a disabler to eventlistener on click for the answer buttons and set a color to correct or wrong answer clicked to confirm selection and stop other buttons to be functional for that second.
- 3 Answer buttons were added instead of being replaced due to mistake in the script (I was getting the element by class name getting only the first element)
  - `solution` Created a function that iterates trough each answer button to make sure answer buttons were cleared before displaying the new answers(append child buttons).
- 4 Not really a bug , but something to be fixed was the way how the questions and answers were displayed (always on the same position same as how the array of object is written) making it easy to remember where the answer was.
  - `fix` I created a function to make question and relative answers to be displayed always at random using fisher-yates algorithm and math.random().
-5 Fixed quiz.js During the initial creation of the quiz.js I recognized that the structure of my scripts was getting me nowhere and was confusing for me
  - `fix` I saved my file to be able to reuse some of the code already written. I reformatted the script diving a huge function in smaller blocks. This made the file more readable and understandable for me and for everyone else.
## Validation
- For CSS I used https://jigsaw.w3.org/css-validator/validator
- For HTML I used https://validator.w3.org/
- For JS  I used https://jshint.com/
- Lighthouse check

![light house scores](/assets/images/readme-images/lighthouse.png)
## Credits
    - Favicon created with favicon.io
    - Fonts are taken from GoogleFonts (fonts.google.com)
    - Image thumb up taken from [Pixabay.com](https://pixabay.com/vectors/thumb-up-thumb-yes-okay-up-vote-297078/)
    - Image thumb down taken also from [Pixabay](https://pixabay.com/vectors/icon-pictogram-pictograph-2027661/)
    - Logo created from Freelogodesign.org
    - Some of the question/answers were taken from Opinionstage.com
---
[comeback to top](#welcome-to-quizzer-readme-quizzer-is-a-simple-quiz-game-with-3-different-difficulties)