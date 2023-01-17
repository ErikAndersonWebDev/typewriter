const sentence = "hello there from lighthouse labs";

let x = 500;
for (let letter of sentence) {
  setTimeout(() => {
    process.stdout.write(letter);
  }, x += 50)
}

setTimeout(() => {
  console.log();
}, x + 50)