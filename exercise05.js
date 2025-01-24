// Remove Duplicates จากอาร์เรย์
// โจทย์:
// เขียนฟังก์ชันที่รับอาร์เรย์เข้ามา แล้วคืนค่าอาร์เรย์ที่ลบค่าที่ซ้ำกันออก
//
// ตัวอย่าง:
// Input: [1, 2, 2, 3, 4, 4, 5]
// Output: [1, 2, 3, 4, 5]

const removeDuplicateData = (array) => {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (!result.includes(array[i])) {
      result.push(array[i]);
    }
  }

  return result;
};

let input = [1, 2, 2, 3, 4, 4, 5, 7, 8, 9, 9, 9, 9, 9, 9, 9, 10, 11, 1, 2];
console.log(removeDuplicateData(input));

// Improve Code from GPT

const removeDuplicateData2 = (array) => {
  return [...new Set(array)];
};

console.log(removeDuplicateData2([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]
