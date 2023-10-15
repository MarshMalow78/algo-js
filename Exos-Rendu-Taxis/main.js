let i = 30;
let changement = 0;

let personnage = {
  nom: "Malo",
  pv: 10,
};

var Songs = [
  "King Kunta - Kendrick Lamar",
  "Bella - Maitre Gims",
  "Anissa - Wejdene",
  "Hope - XXXTentacion",
  "New Opp - Sha GZ",
];



while (i != 0) {
  const random = Math.floor(Math.random() * Songs.length);
  console.log("il vous reste " + i + " feux avant d'arriver à destination");
  console.log(Songs[random])
  if (Songs[random] === Songs[2] && personnage.pv > 0) {
    personnage.pv -= 1;
    if (personnage.pv == 0) {
      console.log("Kaboom");
      break;
    } else {
      console.log(personnage.nom + " entends la musique Anissa, Le suicide est proche");
      console.log(personnage.nom + " change de Taxis");
      console.log(personnage.nom +" a maintenant " +personnage.pv +" points de santé mentale");
      changement += 1;
      i -= 1;
    }
  }
  else {
    console.log(personnage.nom + " est chanceux, pas de Anissa dans ce Taxis");
    console.log("Il reste " +personnage.pv +" points de santé mentale à " +personnage.nom);
    i -= 1;
  }
}

if (personnage.pv > 0 && i == 0) {
  console.log(personnage.nom +" est arrivé à destination avec " +personnage.pv +" point de santé mentale");
  console.log(personnage.nom + " a changé de Taxis  " + changement + " fois");
}

