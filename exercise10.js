// จับคู่วงเล็บ (Valid Parentheses)
// โจทย์:
// เขียนฟังก์ชันเพื่อตรวจสอบว่าสตริงที่มีวงเล็บ (), {}, [] ถูกจับคู่กันอย่างถูกต้องหรือไม่
//
// ตัวอย่าง:
// Input: "(){}[]"
// Output: True
//
// Input: "({[)]}"
// Output: False

const checkValidParentheses = (string) => {
  let check = string.split("");
  let result = true;
  console.log(check);
  for (let i = 0; i < check.length; i++) {
    if (check[i] == "(") {
      if (check[i + 1] != ")") return false;
      continue;
    }
    if (check[i] == "{") {
      if (check[i + 1] != "}") return false;
      continue;
    }
    if (check[i] == "[") {
      if (check[i + 1] != "]") return false;
      continue;
    }
  }
  return result;
};

console.log(checkValidParentheses(""));

// From GPT
const checkValidParentheses2 = (string) => {
  let stack = []; // ใช้ stack ในการเก็บวงเล็บเปิด

  for (let i = 0; i < string.length; i++) {
    let char = string[i];

    // ถ้าเป็นวงเล็บเปิดให้เพิ่มลงใน stack
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    }
    // ถ้าเป็นวงเล็บปิดให้ตรวจสอบกับวงเล็บเปิดที่อยู่ใน stack
    else if (char === ")" || char === "}" || char === "]") {
      let top = stack.pop();
      if (
        (char === ")" && top !== "(") ||
        (char === "}" && top !== "{") ||
        (char === "]" && top !== "[")
      ) {
        return false; // หากวงเล็บปิดไม่ตรงกับวงเล็บเปิด
      }
    }
  }

  // ถ้า stack ว่างหมายถึงทุกวงเล็บเปิดมีการปิดที่ตรงกัน
  return stack.length === 0;
};

console.log(checkValidParentheses("[][][][][][]")); // Output: true
console.log(checkValidParentheses("[{()}]")); // Output: true
console.log(checkValidParentheses("[{(})]")); // Output: false
console.log(checkValidParentheses("[({)}]")); // Output: false
