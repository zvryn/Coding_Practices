// 2. Reverse String
// โจทย์:
// เขียนฟังก์ชันที่รับสตริงเข้ามาหนึ่งตัว แล้วคืนค่าเป็นสตริงที่เรียงกลับด้าน
//
// ตัวอย่าง:
// Input: "hello"
// Output: "olleh"

const reverseString = (string) => {
  let result = [];
  string.split("").forEach((item) => {
    result.unshift(item);
  });
  let finalReverseString = result.join("");
  return finalReverseString;
};

console.log(reverseString("Hello"));

// Short Version

const shortReverseString = (string) => {
  let result;
  result = string.split("").reverse().join("");
  return result;
};

console.log(shortReverseString("Hello"));
