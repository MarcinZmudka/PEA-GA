const fs = require("fs");

const txt = fs.readFileSync(`./files/ftv64.txt`, "utf8"); //czytanie pliu
const hor = txt.split(" ");
const filter_one = hor.filter(value => value != "");
//console.log(filter_one);
const size = 65;
const array = new Array(size);
for (let i = 0; i < size; i++) {
  array[i] = new Array(size);
}
filter_one.map((value, index, array1) => {
  const first = parseInt(index / size);
//   console.log(first);
//   console.log(index % size);
//   console.log("____________");
  array[first][index % size] = value;
});
for (let i = 0; i < size; i++) {
  for (let j = 0; j < size; j++) {
    array[i][j] = parseInt(array[i][j]);
  }
}
const write_array = [];
let word = "";
for (let i = 0; i < size; i++) {
  array[i].map((value, index, array) => {
    word += value + "  ";
    if (index == array.length - 1) {
      word += "\n";
    }
  });
}
 fs.writeFileSync("ftv65_1.txt", word);
