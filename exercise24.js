// แปลงค่าตัวเลข
// โจทย์
// เขียนฟังก์ชัน convertToCurrency(number) ที่รับค่าเป็นตัวเลข แล้วคืนค่าเป็นสตริงในรูปแบบสกุลเงิน เช่น

// convertToCurrency(1234.56); // "1,234.56"
// convertToCurrency(1000000); // "1,000,000.00"

function convertToCurrency(number) {
  const currency = new Intl.NumberFormat("en-US", {
    style: "decimal",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  const result = currency.format(number);
  console.log(result);
  return result;
}

convertToCurrency(1234.56);
convertToCurrency(156548321832);
