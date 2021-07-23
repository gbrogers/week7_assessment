//////////////////STEP 3: Write Code/////////////////////////////

//Sum Zero
//Time Complexity: O(n^2)

function addToZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    let negNum = "-" + arr[i];
    negNum = Number(negNum);

    if (arr.indexOf(negNum) !== -1) {
      return true;
    }
  }
  return false;
}

addToZero([1, 2, 3, -2]);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Unique Characters
//Time complexity: O(n^2)

function hasUniqueChars(str) {
  let strArr = str.split("");

  for (let i = 0; i < strArr.length; i++) {
    if (strArr.indexOf(strArr[i]) !== -1 && strArr.indexOf(strArr[i]) !== i) {
      return false;
    }
  }
  return true;
}
hasUniqueChars("Monday");

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Pangram Sentence
//Time complexity: O(n^2)
//Space complexity: O(n)

function isPangram(myStr) {
  const regex = /[^a-zA-Z]/g;
  let countArr = [];

  myStr = myStr.toLowerCase();
  const strArr = myStr.split(regex).join("").split("");

  for (let i = 0; i < strArr.length; i++) {
    if (countArr.indexOf(strArr[i]) === -1) {
      countArr.push(strArr[i]);
    }
  }
  if (countArr.length === 26) {
    return true;
  } else {
    return false;
  }
}

isPangram("The quick brown fox jumps over the lazy dog!");

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Longest Word
//Time complexity: O(n)
//Space Complexity: O(n)

function findLongestWord(arr) {
  let sortArr = arr.sort((a, b) => {
    return b.length - a.length;
  });
  return sortArr[0];
}

findLongestWord(["hi", "hello", "hi", 6]);
