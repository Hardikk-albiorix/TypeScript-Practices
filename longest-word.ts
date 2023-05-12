// Write a program for finding the longest words from the given string

//SOLUTION : 1
function findLongestWord(str: string) {
  const strArr: string[] = str.split(" ");
  let max: number = strArr[0].length;
  strArr.map((word) => (max = Math.max(max, word.length)));
  const longest_word: string[] = strArr.filter((word) => word.length == max);
  return longest_word;
}
findLongestWord("My name is Hardik Kanjariya Kanjariya abcdefghi");

//SOLUTION : 2
function findLongestWords(str: string) {
  let maxStr: string = "";
  let maxStrArr: string[] = [];
  for (let item of str.split(" ")) {
    if (item.length > maxStr.length) {
      maxStr = item;
    } else if (item.length === maxStr.length) {
      maxStrArr.push(item);
    }
  }
  console.log(`${maxStr},${maxStrArr}`);
}
findLongestWords("My name is Hardik Kanjariya Kanjariya abcdefghi");
