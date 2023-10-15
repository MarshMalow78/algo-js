class Pokemon {
  constructor(name, hp, attack, defense, speed, luck) {
    this.name = name;
    this.hp = hp;
    this.attack = attack;
    this.defense = defense;
    this.speed = speed;
    this.luck = luck;
  }
  isluck() {
    let random = Math.floor(Math.random() * 100);
    return random;
  }
  attackPokémon(défenseur) {
    console.log(`${this.name} attaque ${défenseur.name}`);
    let dégats = this.attack - défenseur.defense;
    défenseur.hp -= dégats;
    console.log(
      `${this.name} inflige ${dégats} points de dégats à ${défenseur.name}`
    );
  }
}

const bulbizarre = new Pokemon("Bulbizarre", 45, 49, 49, 45, 75);
const salameche = new Pokemon("Salameche", 39, 52, 43, 65, 75);
console.log(bulbizarre);
while (bulbizarre.hp != 0 || salameche.hp != 0) {
  if (salameche.isluck() < salameche.luck) {
    salameche.attackPokémon(bulbizarre);
    if (bulbizarre.hp <= 0) {
      console.log("Bulbizarre est mort");
      console.log("Salamèche est le grand vainqueur");
      break;
    } else {
      console.log("Il reste à Bulbizarre " + bulbizarre.hp + " points de vie");
    }
  } else {
    console.log("Salameche a raté son attaque");
  }
  if (bulbizarre.isluck() < bulbizarre.luck) {
    bulbizarre.attackPokémon(salameche);
    if (salameche.hp <= 0) {
      console.log("Salamèche est mort");
      console.log("Bulbizarre est le grand vainqueur");
      break;
    } else {
      console.log("Il reste à Salamèche " + salameche.hp + " points de vie");
    }
  } else {
    console.log("Bulbizarre a raté son attaque");
  }
}
