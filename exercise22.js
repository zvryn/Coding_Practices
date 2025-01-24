// ลบสระ a e i o และ u ออกจากชื่อที่รับเข้ามา

let input = "Sarin Kanokyuraphan";

function removeVowels(name) {
  let result = [];
  let final = [];
  const vowels = "aeiou";
  const filterValue = " ";
  result = name.split("");
  console.log(result);
  for (let i = 0; i < result.length; i++) {
    if (!vowels.includes(result[i])) {
      final.push(result[i]);
    }
  }

  console.log(final);
  final = final
    .filter((item) => {
      if (item != filterValue) return item;
    })
    .join("");

  return final;
}

console.log(removeVowels(input));
