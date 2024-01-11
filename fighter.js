
// Fighter class
class Fighter extends Character {
    constructor(name) {
      super(name, 12, 4, 40);
      this.specialAttackName = "Dark Vision";
      this.specialAttackDamage = 5;
      this.specialAttackManaCost = 20;
      this.darkVisionTurnsReducedDamage = 2;
    }
  
    specialAttack(victim) {
      if (this.mana >= this.specialAttackManaCost) {
        victim.takeDamage(this.specialAttackDamage);
        this.mana -= this.specialAttackManaCost;
        this.darkVisionTurnsReducedDamage--;
      }
    }
  }
  