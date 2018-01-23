const app = "I don't do much."
function destructivelyAppendKitten(name){
  kittens.push(name);
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
}

function destructivelyRemoveFirstKitten(){
  kittens.shift();
}

function destructivelyRemoveLastKitten(){
  kittens.pop();
}

function appendKitten(name){
  let newKittens = [...kittens, name];
  return newKittens;
}

function appendKitten(name){
  let newKittens = [name, ...kittens];
  return newKittens;
}