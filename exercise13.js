// Find the Largest Number in an Array
// เขียนฟังก์ชันหาค่ามากที่สุดในอาร์เรย์ที่เป็นจำนวนเต็ม:
//
// Input: [1, 4, 7, 2, 9, 6]
// Output: 9

function largestNumber(array) {
  let max = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] >= max) {
      max = array[i];
    }
  }
  return max;
}

let input = [1, 4, 7, 2, 9, 6, 12, 23, 5, 1, 100, -100, 546];
console.log(largestNumber(input));
