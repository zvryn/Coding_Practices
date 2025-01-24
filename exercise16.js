// Find the First Non-Repeated Character
// เขียนฟังก์ชันที่หาตัวอักษรตัวแรกที่ไม่ซ้ำกันจากข้อความ:
//
// Input: "swiss"
// Output: w

function checkNonRepeat(word) {
  let count1 = {};
  let array = word.split("");
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
    if (count1[key] > 1) {
      delete count1[key];
    }
  }
  let firstKey = Object.keys(count1)[0];
  return firstKey;
}

console.log(checkNonRepeat("saaxsdasdxtwiss"));
