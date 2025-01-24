// โจทย์ที่ 3: สร้างฟังก์ชันนับจำนวนคำในข้อความ
// รายละเอียด:
// ให้เขียนฟังก์ชันที่รับค่าเป็นข้อความ (string) และคืนค่าจำนวนคำทั้งหมดในข้อความนั้น

function countWords(string) {
  let result = string.trim().split(" ");
  console.log(result);
  let value = "";
  result = result.filter(function (item) {
    return item !== value;
  });
  console.log(result);
  return result.length;
}

console.log(countWords("Hello World"));
