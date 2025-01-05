# Pig Game

## Overview

The **Pig Game** is a simple yet fun dice game built with HTML, CSS, and JavaScript. The goal of the game is for two players to collect 20 points first by rolling the dice and holding their score. Players take turns, and when a "1" is rolled on the dice, their current turn score is lost, and it switches to the other player. The game is won by the first player to reach 20 points.

The game has 3 main buttons for interaction:

- **Roll Dice**: Rolls the dice and adds the value to the player's turn score.
- **Hold**: Adds the current turn score to the player's total score and switches to the next player.
- **New Game**: Resets the game state and starts a new game.

## Features

- **Two-player gameplay**: Players alternate turns to accumulate points.
- **Dice rolling**: A random number between 1 and 6 is generated for each roll.
- **Turn-based mechanics**: If a player rolls a "1", they lose their accumulated points for that turn.
- **Game reset**: The "New Game" button resets the scores and starts a new game.

## Technologies Used

- **HTML**: Structure of the game and interface.
- **CSS**: Styling of the game interface.
- **JavaScript**: Game logic and interaction.

## How to Play

1. The game starts with both players having a score of 0.
2. Each player takes turns rolling the dice.
3. If a player rolls a "1", their points for that turn are discarded and the turn is passed to the other player.
4. The player can click the **Hold** button to add their current score to the total score and pass the turn to the next player.
5. The first player to accumulate 20 points wins the game.

## How to Play

1. **Roll Dice**: Click to roll the dice. If the result is "1", the current player's points for that turn are discarded, and the turn passes to the other player.
2. **Hold**: Click to add the current turn score to the total score of the active player.
3. **New Game**: Click to reset the game and start over.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/pig-game.git
   cd pig-game
   ```

2. Open the `index.html` file in your browser to play the game.

## Demo

You can try the live demo of the game here:

[Live Demo](https://dashing-kangaroo-7276cc.netlify.app/)

## License

This project is open-source and available under the [MIT License](LICENSE).

---

Feel free to fork or contribute to the project! Enjoy playing the Pig Game! 🎲
