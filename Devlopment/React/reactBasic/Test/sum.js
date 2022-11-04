let arr = [2, 3, 3, 3, 5, 2, 5];

function isSum5(arr) {
  for (let i = 0; i < arr.length - 2; i++) {
    if (arr[i] + arr[i + 1] + arr[i + 2] == 7) return true;
  }
  return false;
}

// let res = isSum5(arr);
// // console.log(res);

function duplicat(arr) {
  let res = {};
  let dup = [];

  for (let i = 0; i < arr.length; i++) {
    if (res[arr[i]] == 1) {
      dup.push(arr[i]);
      res[arr[i]] = res[arr[i]] + 1;
    } else if (!res[arr[i]]) {
      res[arr[i]] = 1;
    }
  }
  return dup;
}

let duplicatVal = duplicat(arr);
console.log(duplicatVal);
