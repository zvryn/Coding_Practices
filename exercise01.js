// ให้รับจำนวนเต็มมาเรื่อยๆ ซึ่งเลขเหล่านั้นคือสมาชิกในเซต โดยหากพบว่าสมาชิกในเซตนั้นที่ซ้ำกันนับเป็นแค่ตัวเดียว ตัวอย่าง A = {1,1,1,1,2,2,3} จะได้ว่าสมาชิก A มีเพียงแค่ 3 ตัว คือ 1 , 2 , 3
// บรรทัดที่ 1 รับชุดตัวเลขจำนวนเต็มมาเรื่อยๆจนกว่าจะพิมพ์ 0
// เลขที่รับมาสามารถมั่นใจได้อย่างแน่นอนว่าจะไม่เกิน 10,000 ตัว

// Get User Input

let inputNumber = [1, 1, 1, 1, 2, 2, 3, 4, 5, 6, 7];

function getUserInput() {
  let checkNumber = true;
  do {
    let number = prompt("Input Number in Set");
    if (number == 0) {
      checkNumber = false;
    } else {
      inputNumber.push(number);
    }
  } while (checkNumber);
}
function checkSet(numbers) {
  let result = []; // เก็บสมาชิกที่ไม่ซ้ำกัน

  for (let i = 0; i < numbers.length; i++) {
    if (!result.includes(numbers[i])) {
      // ถ้าสมาชิกยังไม่มีอยู่ใน result
      result.push(numbers[i]); // เพิ่มสมาชิกเข้า result
    }
  }
  return result.length;
}

console.log(checkSet(inputNumber));
