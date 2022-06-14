const num = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
];

const tens = "twenty thirty forty fifty sixty seventy eighty ninety".split(" ");

export const toVerbal = (n) => {
  const number = n.toString();
  const x = number.length;
  if (x > 5)
    throw new Error("Error!!! Number is too big. it should be between 0-99999");
  else if (n < 20) return num[n];
  const digit = n % 10;
  if (n < 100) return tens[~~(n / 10) - 2] + (digit ? "-" + num[digit] : "");
  if (n < 1000)
    return (
      num[~~(n / 100)] +
      " hundred" +
      (n % 100 == 0 ? "" : " and " + toVerbal(n % 100))
    );
  return (
    toVerbal(~~(n / 1000)) +
    " thousand" +
    " and" +
    (n % 1000 != 0 ? " " + toVerbal(n % 1000) : "")
  );
};
