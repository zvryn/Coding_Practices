// หาผลรวมของตัวเลขในอาร์เรย์
// โจทย์:
// เขียนฟังก์ชันที่รับอาร์เรย์ของตัวเลข แล้วคืนค่าผลรวมของตัวเลขทั้งหมดในอาร์เรย์
//
// ตัวอย่าง:
// Input: [5, 10, 15, 20]
// Output: 50

const summation = (array, initialValue) => {
  let sum = array.reduce((total, value) => total + value, initialValue);
  return sum;
};

console.log(summation([1, 2, 3, 4], 0));
