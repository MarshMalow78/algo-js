let survivant = []
let Mort = []
let DegatStrike = 10
let DegatSuicide = 15
let uniqueIdCounter = 1

/*Creation de la bibliothèque de noms et de classe*/
let Names = ["Franck","Bella","Perrine","Robert","Angel","Hugues","Jeremy","Stephanie","Guerric","Malo","Bérenger","Gontier","Miguel","Fleur","Carlotta","Theophile","Manuela","Paco","Olivier","Carlotta","Simeon","Candido","Prune",
];
let Tueur = {
  Nom : "Jason",
  Pv : 100
}

let Caractéristique = [
  ["Sportif",10,70,20],["Nerd",75,5,20,],["Gothique",40,20,40],["Voyageur",65,15,20],["Peintre",25,30,45],["Rappeur",10,80,10],["Star",85,10,5],["Policier",5,90,5]   
];

class Survivants {
  constructor (Nom,classe,ProbDie,ProbATQ,ProbSuicide) {
  this.Id = uniqueIdCounter++;
  this.Nom = Nom
  this.classe = classe
  this.ProbDie = ProbDie
  this.ProbATQ = ProbATQ
  this.ProbSuicide = ProbSuicide
  this.currentMove = this.isMove()   
  }

  isMove() {
    let random = Math.floor(Math.random() * 100);
    return random;
  }
  attackStrike() {
    console.log(this.currentMove);
    /*Fonction d'attaque du survivant */
    if (this.ProbDie < this.currentMove &&  this.currentMove < this.ProbDie + this.ProbATQ) {
      console.log(`${Tueur.Nom} attaque ${this.classe} ${this.Nom} `)
      Tueur.Pv -= DegatStrike
      console.log(`${this.classe} ${this.Nom} à esquiver l'attaque et  inflige ${DegatStrike} points de dégats à ${Tueur.Nom}`);
      console.log(`Il reste à ${Tueur.Nom}, ${Tueur.Pv} points de vie`)
      return true;
    }
    return false
  }
  attackSuicide() {
    /*Fonction d'attaque suicide du survivant */
    console.log(this.currentMove);
    if (this.ProbDie + this.ProbATQ < this.currentMove && this.currentMove < 100 ){
      Tueur.Pv -= DegatSuicide
      console.log(`${this.classe} ${this.Nom} inflige ${DegatSuicide} points de dégats à ${Tueur.Nom}, mais a donc perdu la vie`);
      console.log(`Il reste à ${Tueur.Nom}, ${Tueur.Pv} points de vie`);
      return true
    }
    return
  }
  updateMove() {
    this.currentMove = this.isMove();
  }
}

for(let i = 0;i < 5; i++){
  let randomName = Names[Math.floor(Math.random() * Names.length)];
  let RandomCara = Math.floor(Math.random() * Caractéristique.length)

  survivant.push(new Survivants(randomName,Caractéristique[RandomCara][0],Caractéristique[RandomCara][1],Caractéristique[RandomCara][2],Caractéristique[RandomCara][3]));
}
console.log(survivant);


while (Tueur.Pv > 0 && survivant.length > 0 ) {
  if (Tueur.Pv <= 0){
    console.log(`${Tueur.Nom} est mort`)
    break
  }
  const survivingSurvivors = [];
  Object.values(survivant).forEach((element) => {
    element.updateMove();
    if (Tueur.Pv <= 0 ){
      return
    }
    if(element.attackStrike()){
    }
    else if (element.attackSuicide()){  
      Mort.push({Id:element.Id, Nom: element.Nom, Classe: element.classe });
    } 
    else {
      console.log(`${Tueur.Nom} attaque ${element.classe} ${element.Nom} `)
      console.log(`${element.classe} ${element.Nom} est mort`);
      Mort.push({Id:element.Id, Nom: element.Nom, Classe: element.classe });
    }
    survivingSurvivors.push(element);
  });
  survivant = survivingSurvivors.filter((element) => !Mort.map((m) => m.Nom).includes(element.Nom));
  
}
if (Tueur.Pv <= 0 && survivant.length != 0){
  console.log(`Bravo l'équipe, vous avez gagné, il reste ${survivant.length} survivants`);
  console.log(`Noms des survivants décédés :`);
  Mort.forEach((Mort) => {
    console.log(`- Nom: ${Mort.Nom}, Classe: ${Mort.Classe}`);
  })
  console.log(`Faisons la fête en leur honneur`);
  console.log(`Noms des survivants restants :`);
  survivant.forEach((survivant) => {
    console.log(`- Nom: ${survivant.Nom}, Classe: ${survivant.classe}`);
  });}
else if (Tueur.Pv > 0 && survivant.length == 0){
  console.log(`${Mort.length} survivant(s) sont mort, il ne reste plus personne, ${Tueur.Nom} va continuer sa terreur`);
  Mort.forEach((Mort) => {
    console.log(`- Nom: ${Mort.Nom}, Classe: ${Mort.Classe}`);
})}
else if (Tueur.Pv <= 0 && survivant.length == 0){
  console.log(`${Mort.length} survivant(s) sont mort, il ne reste plus personne, Mais ${Tueur.Nom} aussi. Merci à vous aventurier`)
  Mort.forEach((Mort) => {
    console.log(`- Nom: ${Mort.Nom}, Classe: ${Mort.Classe}`);
})}