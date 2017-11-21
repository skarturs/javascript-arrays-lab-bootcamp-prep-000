const app = "I don't do much."
var kittens = ['Milo', 'Otis', 'Garfield'];
var kakis1 = 'Ralph';

function destructivelyAppendKitten(kittens, kakis1) {
  kittens.unshift(kakis1);
  return kittens;
}
