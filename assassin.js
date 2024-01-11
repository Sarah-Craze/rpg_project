// Assassin class
class Assassin extends Character {
    constructor(name) {
      super(name, 6, 6, 20);
      this.specialAttackName = "Shadow Hit";
      this.specialAttackDamage = 7;
      this.specialAttackManaCost = 20;
    }
  
    specialAttack(victim) {
      if (this.mana >= this.specialAttackManaCost) {
        // Perform special attack logic
      }
    }
  }

// Instances of characters
const grace = new Fighter("Grace");
const ulder = new Paladin("Ulder");
const moana = new Monk("Moana");
const draven = new Berzerker("Draven");
const carl = new Assassin("Carl");