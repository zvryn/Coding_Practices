//  Count Vowels
//  เขียนฟังก์ชันที่นับจำนวนสระในข้อความ:
//
//  Input: "Hello World"
//  Output: 3 (เพราะมี 'e', 'o', 'o')

function countVowels(word) {
  let count1 = {};
  let result = [];
  let array = word.toLowerCase().split("");
  console.log(array);
  for (let i = 0; i < array.length; i++) {
    if (count1[array[i]] == undefined) {
      count1[array[i]] = 1;
    } else {
      count1[array[i]] += 1;
    }
  }
  console.log(count1);
  for (let key in count1) {
    if (key == "a" || key == "e" || key == "i" || key == "o" || key == "u") {
      result.push(count1[key]);
    }
  }

  console.log(result);
  return result.reduce((total, value) => total + value, 0);
}

console.log(countVowels("Hello World Sad Sarin Pass"));

// Improve from GPT

function countVowels2(word) {
  let count1 = {};
  let vowels = "aeiou";
  let totalVowels = 0;
  let array = word.toLowerCase().split("");

  // นับจำนวนการปรากฏของแต่ละตัวอักษร
  for (let char of array) {
    count1[char] = (count1[char] || 0) + 1;
  }

  // รวมจำนวนครั้งที่ตัวอักษรสระปรากฏ
  for (let key in count1) {
    if (vowels.includes(key)) {
      totalVowels += count1[key];
    }
  }

  return totalVowels;
}

console.log(countVowels2("Hello World Sad Sarin Pass")); // Output: 7
