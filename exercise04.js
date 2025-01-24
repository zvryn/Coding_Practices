// 3. ตรวจสอบคำ Palindrome
// โจทย์:
// เขียนฟังก์ชันเพื่อตรวจสอบว่าสตริงที่รับเข้ามาเป็น Palindrome หรือไม่ (Palindrome คือคำที่อ่านจากซ้ายไปขวาหรือขวาไปซ้ายได้เหมือนกัน เช่น "madam", "racecar")
//
// ตัวอย่าง:
// Input: "madam"
// Output: True
//
// Input: "hello"
// Output: False

const checkParindrome = (word) => {
  let adjustWord = word.toLowerCase().trim();
  let wordToArray = [];
  let reverseWordToArray = [];
  wordToArray = adjustWord.split("");
  reverseWordToArray = wordToArray.toReversed();
  let y = wordToArray.join("");
  let x = reverseWordToArray.join("");
  return x == y ? true : false;
};

let test = "Hello";
let test2 = test.split("");
let test3 = test2.toReversed();
console.log(test3);
console.log(test2);

console.log(checkParindrome("axa"));

// Improve Code From GPT
const checkPalindrome2 = (word) => {
  let adjustWord = word.toLowerCase().trim();
  let len = adjustWord.length;
  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (adjustWord[i] !== adjustWord[len - 1 - i]) {
      return false;
    }
  }
  return true;
};
