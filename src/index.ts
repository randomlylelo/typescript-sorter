const testarr = [2, 3, 5, 6, 1, 23, 45, 643, 12, 324];

// Using TS functions
function sortNumArray(arr: number[]): Array<number> {
  return arr.sort((a, b) => a - b);
}

console.log(sortNumArray(testarr));


// Bubble sort
function sortNumArray2(arr: number[]): number[] {
  let sortedArr: number[] = arr; // Copy the array

  const swap = (array: number[], firIndex: number, secIndex: number): number[] => {
    let temp = array[firIndex];
    array[firIndex] = array[secIndex];
    array[secIndex] = temp;
    return array;
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if(sortedArr[j] > sortedArr[j+1]) {
        sortedArr = swap(sortedArr, j, j+1)
      }
    }
  }

  return sortedArr;
}

console.log(sortNumArray2(testarr))