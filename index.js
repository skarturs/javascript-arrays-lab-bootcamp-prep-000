const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"];
var kakis1 = "Ralph";
var kakis2 = "Bob";

function destructivelyAppendKitten(kittens, kakis1) {
  kittens.push(kakis1);
  return kittens;
}

function destructivelyPrependKitten(kittens, kakis2) {
  kittens.unshift(kakis2);
  return kittens;
}
