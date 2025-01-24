// Reverse an Integer
// เขียนฟังก์ชันที่รับจำนวนเต็มและคืนค่าจำนวนที่เป็นการกลับหลักของตัวเลข เช่น:
//
// Input: 12345
// Output: 54321

function reverseInterger(numbers) {
  let numberToString = numbers.toString();
  console.log(numberToString);
  let result = numberToString.split("").reverse().join("");
  console.log(result);
  return result;
}

console.log(reverseInterger(54678215));
