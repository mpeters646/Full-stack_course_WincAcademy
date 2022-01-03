const evenOddReporter = () => {
  for (i = 0; i <= 20; i++) {
    if (i % 2 == 0) {
      console.log(`${i} is even`);
    } else {
      console.log(`${i} is odd`);
    }
  }
};
// evenOddReporter();

let w = 0;
while (w < 5) {
  console.log(`This is while iteration number ${w}`);
  w++;
}

for (i = 0; i < 5; i++) {
  console.log(`This is for iteration number ${i}`);
}
