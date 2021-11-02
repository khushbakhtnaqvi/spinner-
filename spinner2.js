const array = ['|', '/', '-', '\\', '|', '/', '-', '\\']
let timer = 100;
for( let val of array) {
  timer += 300;
  setTimeout(() => {
    process.stdout.write(`\r${val}   `);
  }, timer);
}