// Berzerker class
class Berzerker extends Character {
    constructor(name) {
      super(name, 8, 4, 0);
      this.specialAttackName = "Rage";
    }
  
    specialAttack() {
      this.dmg++;
      this.hp--;
    }
  }