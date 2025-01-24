// FizBuzz
// ถ้าตัวเลขหารด้วย 3 ลงตัว ให้พิมพ์ "Fizz"
// ถ้าตัวเลขหารด้วย 5 ลงตัว ให้พิมพ์ "Buzz"
// ถ้าตัวเลขหารด้วยทั้ง 3 และ 5 ลงตัว ให้พิมพ์ "FizzBuzz"
// ถ้าหาอะไรไม่ได้เลย ให้พิมพ์ตัวเลขนั้น

const fizBuzz = (number) => {
  let result = [];
  for (let i = 1; i <= number; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      result.push("FizzBuzz");
    } else if (i % 3 == 0) {
      result.push("Fizz");
    } else if (i % 5 == 0) {
      result.push("Buzz");
    } else result.push(i);
  }

  return result;
};

x = fizBuzz(15);
console.log(x);
