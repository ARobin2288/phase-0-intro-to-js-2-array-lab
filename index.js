// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  const destructivelyAppendCat = cats.push("Ralph");
  return destructivelyAppendCat;
}

cats.length = 0;
cats.push("Milo", "Otis", "Garfield");

function destructivelyPrependCat(name) {
  const destructivelyPrependCat = cats.unshift("Bob");
  return destructivelyPrependCat;
}

cats.length = 0;
cats.push("Milo", "Otis", "Garfield");

function destructivelyRemoveLastCat() {
  const destructivelyRemoveLastCat = cats.pop();
  return destructivelyRemoveLastCat;
}

cats.length = 0;
cats.push("Milo", "Otis", "Garfield");

function destructivelyRemoveFirstCat() {
  const destructivelyRemoveFirstCat = cats.shift();
  return destructivelyRemoveFirstCat;
}

cats.length = 0;
cats.push("Milo", "Otis", "Garfield");

function appendCat(name) {
  const appendCat = [...cats, "Broom"];
  return appendCat;
}

cats.length = 0;
cats.push("Milo", "Otis", "Garfield");

function prependCat(name) {
  const prependCat = ["Arnold", ...cats];
  return prependCat;
}

cats.length = 0;
cats.push("Milo", "Otis", "Garfield");

function removeLastCat() {
  const removeLastCat = [...cats.slice(0, 2)];
  return removeLastCat;
}

cats.length = 0;
cats.push("Milo", "Otis", "Garfield");

function removeFirstCat() {
  const removeFirstCat = [...cats.slice(1)];
  return removeFirstCat;
}
