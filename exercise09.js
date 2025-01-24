// นับจำนวนคำในสตริง
// โจทย์:
// เขียนฟังก์ชันที่รับสตริงเข้ามา แล้วคืนค่าจำนวนคำในสตริง (คำจะถูกแยกด้วยช่องว่าง)
//
// ตัวอย่าง:
// Input: "Hello world, this is Sarin"
// Output: 5

const countWord = (sentence) => {
  let array = sentence.trim().split("");
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] == " ") {
      total = total + 1;
    }
  }
  return total + 1;
};

let input = "Hello world, this is Sarin Sad Sad ";
console.log(countWord(input));
