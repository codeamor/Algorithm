// x만큼 간격이 있는 n개의 숫자

function solution(x, n) {
  let result = [];
  for (let i = 1; i <= n; i++) {
    result.push(x * i);
  }
  return result;
}

// 다른 사람 풀이 1
// 함수형에 익숙해지자!

function solution(x, n) {
  return Array(n)
    .fill(x)
    .map((v, i) => (i + 1) * v);
}

// 다른 사람 풀이 2

function solution(x, n) {
  return [...Array(n).keys()].map((v) => (v + 1) * x);
}

// * key iterator에 익숙해지자.
// - key iterator는 빈 인덱스를 무시하지 않는다.
// var arr = ["a", , "c"];
// var sparseKeys = Object.keys(arr);
// var denseKeys = [...arr.keys()];
// console.log(sparseKeys); // ['0', '2']
// console.log(denseKeys);  // [0, 1, 2]
