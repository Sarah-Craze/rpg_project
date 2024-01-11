
// Monk class
class Monk extends Character {
    constructor(name) {
      super(name, 8, 2, 200);
      this.specialAttackName = "Heal";
      this.specialAttackHealing = 8;
      this.specialAttackManaCost = 25;
    }
  
    specialAttack() {
      if (this.mana >= this.specialAttackManaCost) {
        this.hp += this.specialAttackHealing;
        this.mana -= this.specialAttackManaCost;
      }
    }
  }