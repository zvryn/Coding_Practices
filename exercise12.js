// Check for Anagrams
// เขียนฟังก์ชันที่ตรวจสอบว่า 2 คำเป็น anagram (สลับตำแหน่งกัน) หรือไม่ โดยไม่ใช้ฟังก์ชัน sorting ในการเปรียบเทียบ:
//
// Input: "listen", "silent"
// Output: true

// Sorting Anagram
let input1 = "listen";
let input2 = "silent";

let result1 = input1.split("").sort();
let result2 = input2.split("").sort();

x = result1.join() === result2.join() ? true : false;
console.log(result1.join(""));
console.log(result2.join(""));
console.log(x);

// Without Sort

function checkAnagram(word1, word2) {
  let count1 = {};
  let count2 = {};
  if (word1.length !== word2.length) {
    return false; // ถ้าความยาวไม่เท่ากัน ไม่สามารถเป็น anagram ได้
  }
  for (let i = 0; i < word1.length; i++) {
    if (count1[word1[i]] == undefined) {
      count1[word1[i]] = 1;
    } else {
      count1[word1[i]] = count1[word1[i]] + 1;
    }
  }
  console.log(count1);

  for (let i = 0; i < word2.length; i++) {
    if (count2[word2[i]] == undefined) {
      count2[word2[i]] = 1;
    } else {
      count2[word2[i]] = count2[word2[i]] + 1;
    }
  }
  console.log(count2);

  for (let key in count1) {
    if (count1[key] !== count2[key]) {
      return false;
    }
  }
  return true;
}

console.log(checkAnagram("listen", "silent"));
