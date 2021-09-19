// Задание 3
const a = -4;
const b = 7;
if (a >= 0 && b >= 0)
  console.log(a - b)
else if (a < 0 && b < 0)
  console.log(a * b)
else if ((a >= 0 && b < 0) || (a < 0) && (b > 0)) console.log(a + b);