// Fibonacci Sequence
// เขียนฟังก์ชันที่คืนค่าลำดับที่ n ของ Fibonacci Sequence:
//
// Input: 6
// Output: 8 (ลำดับ Fibonacci คือ 0, 1, 1, 2, 3, 5, 8...)

const fibonacci = (number) => {
  let initSequence = [0, 1];
  let result = [];
  if (number == 0) {
    result.push(initSequence[0]);
    return result;
  }

  if (number == 1) {
    return [...initSequence];
  } else {
    result = [...initSequence];
    let nextNumber;
    for (let i = 2; i < number; i++) {
      nextNumber = result[i - 2] + result[i - 1];
      result.push(nextNumber);
    }
    return result;
  }
};

console.log(fibonacci(9));
