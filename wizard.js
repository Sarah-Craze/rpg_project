// Wizard class
class Wizard extends Character {
    constructor(name) {
      super(name, 10, 2, 200);
      this.specialAttackName = "Fireball";
      this.specialAttackDamage = 7;
      this.specialAttackManaCost = 25;
    }
  
    specialAttack(victim) {
      if (this.mana >= this.specialAttackManaCost) {
        victim.takeDamage(this.specialAttackDamage);
        this.mana -= this.specialAttackManaCost;
      }
    }
  }