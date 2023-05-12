function frequencyOfElement(array:number[]) {
  const frequency = {};
  for (let item of array) {
    if (frequency[item]) {
      frequency[item]++;
    } else {
      frequency[item] = 1;
    }
  }
  return frequency;
}
console.log(frequencyOfElement([10, 12, 45, 12, 10, 40, 45, 40, 40, 45, 45, 20,20]));
