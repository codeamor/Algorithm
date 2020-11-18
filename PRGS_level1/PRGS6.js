// 같은 숫자는 싫어

function solution(arr) {
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      answer.push(arr[i]);
    }
  }
  return answer;
}

// 다른 사람 풀이

function solution(arr) {
  return arr.filter((val, idx) => val !== arr[idx + 1])
}