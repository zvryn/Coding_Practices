function printStar(number) {
  let star = "X";
  for (let i = 1; i <= number; i++) {
    console.log(star.repeat(i));
  }
}

printStar(5);
