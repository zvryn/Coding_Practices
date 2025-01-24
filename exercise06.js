// 6. Factorial
// โจทย์:
// เขียนฟังก์ชันที่รับตัวเลข n (จำนวนเต็มบวก) แล้วคืนค่า Factorial ของ n
// (Factorial คือการคูณของตัวเลขทุกตัวตั้งแต่ 1 ถึง n เช่น 5! = 5 x 4 x 3 x 2 x 1 = 120)
//
// ตัวอย่าง:
// Input: n = 5
// Output: 120

const factorial = (number) => {
  let total;
  if (!Number.isInteger(number)) {
    return "Factorial is undefined for decimals";
  }
  if (number == 0) {
    return 1;
  } else if (number < 0) {
    return "Cannot Calculate";
  } else {
    total = 1;
    for (let i = 1; i <= number; i++) {
      total = total * i;
    }
    return total;
  }
};

console.log(factorial(3));
