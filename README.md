# Vue Trivia Game

This is a geography-themed trivia game built with [Vue.js](https://vuejs.org/).

The questions are sourced form the [Open Tiriva Database](https://opentdb.com/).

## How to play

The app is accessible at https://vue-trivia-game.vercel.app/.

### Start Screen

The app opens on a start screen that has four buttons for choosing the difficulty level: Easy, Medium, Hard or Random. Choose a difficulty level by clicking the corresponding button. After this, the first question is opened.

### Questions

The questions are answered by clicking any of the answer buttons. After answering, the app opens the following question. Once all questions have been answered, the results are shown.

### Result Screen

The results page shows  your total score. Each correct answer awards 10 points. The page also lists all the questions with their correct answers and the answers you chose.

The bottom of the page contains a 'Play Again' button. By pressing this button, you can move back to the start screen and start a new game.

## Run the project locally

Use the following steps to run the project on your local machine.

### Clone the source code
```
git clone https://github.com/maijahaka/vue-trivia-game.git
```

### Move to the project folder
```
cd vue-trivia-game
```

### Install dependencies
```
npm install
```

### Compile and hot-reload for development
```
npm run serve
```

### Compile and minify for production
```
npm run build
```
