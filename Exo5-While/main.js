let a = 3
while (a < 9) {
    a++
    if (a == 7) {
        continue
    }
    if (a == 8) {
        break
    }
    console.log(a)
}
console.log("j'ai cassé la boucle au bout de " + a + " tours") 