//write a program for swapping two numbers using temparory variable
function swapToNumbers(x: number, y: number) {
  let temp: number;
  temp = x;
  x = y;
  y = temp;
  return { x, y };
}
console.log(swapToNumbers(10, 12));

//write a program for swapping two numbers without using temparory variable
function swapToNumber(x: number, y: number) {
    x = x + y;
    y = x - y;
    x = x - y;
    return { x, y };
  }
  console.log(swapToNumber(50,60));