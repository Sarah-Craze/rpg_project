
// Paladin class
class Paladin extends Character {
    constructor(name) {
      super(name, 16, 3, 160);
      this.specialAttackName = "Healing Lighting";
      this.specialAttackDamage = 4;
      this.specialAttackHealing = 5;
      this.specialAttackManaCost = 40;
    }
  
    specialAttack(victim) {
      if (this.mana >= this.specialAttackManaCost) {
        victim.takeDamage(this.specialAttackDamage);
        this.hp += this.specialAttackHealing;
        this.mana -= this.specialAttackManaCost;
      }
    }
  }