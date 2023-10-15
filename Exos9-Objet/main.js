let student = {
  name: "Malo",
  favoriteFood: "Tarte",
  city: "Epône",
};
let a = 0;
Object.values(student).forEach((element) => {
  a += element.length;
});
if (a % 2 == 0) {
  console.log(a);
  console.log("pair");
} else {
  console.log(a);
  console.log("impair");
}
console.log