let data = process.argv.slice(2);
let check =data.sort();
let start = 0;
let numOfSec = 1000;

if (check === []){
  return;
}
  for (let i = 0; i < check.length; i++) {
  start = check[i] * numOfSec;
  if (check[i] > 0 && check[i] !== NaN) {
  setTimeout(() => {
  process.stdout.write(`${check[i]} seconds \x07 \n`);
  }, start)}
}

