class Game {
  constructor() {
    this.turnLeft = 10;
    this.characters = [grace, ulder, moana, draven, carl];
    const gandalf = new Wizard("Gandalf");
    this.characters.push(gandalf);
  }

  async startGame() {
    console.log("Let the game begin!");

    for (let i = 1; i <= 10; i++) {
      await this.startTurn(i);
      this.turnLeft--;

      // Wait for 1 second between each turn
      await new Promise(resolve => setTimeout(resolve, 1000));
    }

    // Call the randomizeResults method to determine the winner
    this.randomizeResults();
  }

  async startTurn(turnNumber) {
    console.log(`It's turn ${turnNumber}`);
    this.shuffleCharacters();

    for (const character of this.characters) {
      if (character.status === "playing") {
        console.log(`It's time for ${character.name} to play.`);
        // Add the logic for the character's turn (user input or AI)
        // Example: character.specialAttack(targetCharacter);
      }
    }

    this.logRemainingCharacters();
    await this.skipTurn();
  }

  async skipTurn() {
    // Logic for skipping a turn
    await new Promise(resolve => setTimeout(resolve, 1000));
  }

  randomizeResults() {
    // Shuffling characters using the Fisher-Yates algorithm
    for (let i = this.characters.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.characters[i], this.characters[j]] = [this.characters[j], this.characters[i]];
    }

    // Determining the winner and displaying the result
    const winner = this.characters.find(c => c.status === "playing");
    if (winner) {
      console.log(`${winner.name} is the winner!`);
    } else {
      console.log("It's a draw!");
    }
  }

  logRemainingCharacters() {
    // Log the remaining characters and their stats
    console.log("Remaining characters:");
    this.characters.forEach(character => {
      console.log(`${character.name} - HP: ${character.hp}, Mana: ${character.mana}, Status: ${character.status}`);
    });
  }

  shuffleCharacters() {
    // Shuffling characters using the Fisher-Yates algorithm
    for (let i = this.characters.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.characters[i], this.characters[j]] = [this.characters[j], this.characters[i]];
    }
  }
}

// Instance of the game
const game = new Game();

// Start the game
game.startGame();