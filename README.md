# Welcome to Quizzer readme! Quizzer is a simple quiz game with 3 different difficulties.

I aim to provide a easy to play quiz game, simple to understand and straight forward to some fun.

## Getting started

- ### First things first..Exploring Quizzer
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
- Provided counters tha dinamically updates the user on their progress in real time.
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
---

 ![Quizzer Devices Mockup](/assets/images/readme-images/mockupquiz.png)

---
## Scope

### Audience 
- The quiz is suited for general audience, depending on the difficulty
- The easy mode is open to everyone looking for a quiz game
- The Normal and Hard mode requires more knowledge but are still open to whoever wants a bit more challenging questions
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