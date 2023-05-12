//  Write a program for sorting an array of numbers without using in-built method
function sortArray(array: number[]) {
    let done:boolean = false;
    while (!done) {
      done = true;
      for (let i = 1; i < array.length; i++) {
        if (array[i - 1] > array[i]) {
          done = false;
          const temp:number = array[i - 1];
          array[i - 1] = array[i];
          array[i] = temp;
        }
      }
    }
    return array;
  }
  const numbers = [10, 2, 4, 6, 8, 32, 23, 50];
  console.log("Sorted Array :" + sortArray(numbers));
  