// ตรวจสอบจำนวนเฉพาะ (Prime Number)
// โจทย์:
// เขียนฟังก์ชันเพื่อตรวจสอบว่าจำนวนเต็ม n เป็นจำนวนเฉพาะหรือไม่ (จำนวนเฉพาะคือจำนวนที่หารลงตัวได้แค่ 1 และตัวมันเอง)
//
// ตัวอย่าง:
// Input: n = 7
// Output: True
//
// Input: n = 10
// Output: False

const checkPrimeNumber = (number) => {
  let result = [];
  for (let i = 1; i <= number; i++) {
    if (number % i == 0) {
      result.push(i);
    }
  }
  console.log(result);
  if (result.length == 2) {
    return true;
  } else return false;
};

console.log(checkPrimeNumber(5));
