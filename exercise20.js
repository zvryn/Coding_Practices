// Check if a String Contains Only Digits
// เขียนฟังก์ชันที่ตรวจสอบว่า string ประกอบด้วยตัวเลขเท่านั้นหรือไม่:
//
// Input: "123456"
// Output: true
// Input: "123a56"
// Output: false

function checKString(string) {
  let result = [];
  let number = "0123456789";
  console.log(result);
  result = string.trim().split("");
  console.log(result);
  for (let i = 0; i < result.length; i++) {
    if (!number.includes(result[i])) {
      return false;
    }
  }
  return true;
}

console.log(checKString("1256"));
