let remainder,reverse_number = 0;

function reverseNumber(num) {
  while (num != 0) {
    remainder = num % 10;
    reverse_number = reverse_number * 10 + remainder;
    num = parseInt(String(num / 10));
  }
}

reverseNumber(526);
console.log("Reversed Number :" + reverse_number);
