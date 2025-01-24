// Find the Second Largest Number
// เขียนฟังก์ชันที่หาค่ามากเป็นอันดับสองในอาร์เรย์:
//
// Input: [10, 15, 4, 7, 20]
// Output: 15

const findSecondLargestNumber = (numbers) => {
  let result = [];
  result = numbers.sort((a, b) => b - a);
  console.log(result);
  let removeDupilcate = [...new Set(result)];
  console.log(removeDupilcate);
  return removeDupilcate[1];
};

let input = [10, 15, 4, 7, 20, 20, 20, 20, 15, 14, 13, 18, 19, 15, 19.5];
console.log(findSecondLargestNumber(input));
