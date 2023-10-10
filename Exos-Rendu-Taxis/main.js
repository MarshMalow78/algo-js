let i = 30
let pv = 10
var Songs = ['King Kunta', 'Bella', 'Anissa', 'Hope', 'New Opp']
compteur = 0


while (i > 0, i -= 1) {
    console.log(i)
    const random = Math.floor(Math.random() * Songs.length)
    if (Songs[random] === Songs[2] && pv >= 0) {
        pv -= 1
        console.log("Vous entendez la musique Anissa, Le suicide est proche")
        console.log("Vous avez maintenant " + pv + " points de santé mentale")
        compteur += 1
    }
    else if (pv === 0) {
        console.log("Kaboom")
        break
    }
    else {
        console.log("Le monde est chanceux, pas de Anissa dans ce Taxis")
        console.log("Il vous reste " + pv + " points de santé mentale")

    }
}
console.log("Vous avez changé de Taxis " + compteur + " fois")