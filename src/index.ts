const testarr = [2, 3, 5, 6, 1, 23, 45, 643, 12, 324];


function sortNumArray(arr: number[]): Array<number> {
  return arr.sort((a, b) => a - b);
}

console.log(sortNumArray(testarr))