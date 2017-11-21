const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"];
var kakis1 = "Ralph";
var kakis2 = "Bob";

function destructivelyAppendKitten() {
  kittens.push(kakis1);
  return kittens;
}

function destructivelyPrependKitten() {
  kittens.unshift(kakis2);
  return kittens;
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}
function destructivelyRemoveFirstKitten(){
  kittenrs.shift();
  return kittens;
}