// while loop

let counter = 1;
let sum = 0;

while (counter <= 100) {
  if (counter % 2 == 0) {
    sum = sum + counter;
  }
  counter++;
}

document.write(sum);

// do while loop

do {
  if (counter % 2 == 0) {
    sum = sum + counter;
  }
  counter++;
} while (counter <= 100);

//for loop

for (let counter = 1; counter <= 100; counter++) {
  if (counter % 2 == 0) {
    sum = sum + counter;
  }
}
document.write(sum);
