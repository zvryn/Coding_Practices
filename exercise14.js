// Sum of Digits
// เขียนฟังก์ชันที่หาผลรวมของตัวเลขในแต่ละหลักของจำนวนเต็ม:
//
// Input: 12345
// Output: 15 (เพราะ 1 + 2 + 3 + 4 + 5 = 15)

const summationDigit = (number) => {
  let array = BigInt(number).toString().split("");
  console.log(array);
  let newArray = array.map((item) => Number(item));
  console.log(newArray);
  return newArray.reduce((total, value) => total + value, 0);
};

console.log(summationDigit(12345678910111111111111));
