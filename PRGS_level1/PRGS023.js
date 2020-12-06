// < 평균 구하기 >

function solution(arr) {
  return arr.reduce((acc, cur) => acc + cur) / arr.length;
}

// < 문자열을 정수로 바꾸기 >

function solution(s) {
  return parseInt(s);
}

// < 문자열 내림차순으로 배치하기 >
// 좋아요 많은 풀이랑 똑같네

function solution(s) {
  return s.split("").sort().reverse().join("");
}

// < 행렬의 덧셈 >

function solution(arr1, arr2) {
  let result = [];

  for (let i = 0; i < arr1.length; i++) {
    result.push([]);
  }

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1[i].length; j++) {
      result[i][j] = arr1[i][j] + arr2[i][j];
    }
  }
  return result;
}

// 다른 사람 풀이 1
// 행렬의 위치에 따라 1:1 매칭이라 map이 쓰일 수도 있겠다고 생각했는데 이중 map은 처음 본다.

function solution(A, B) {
  return A.map((a, i) => a.map((b, j) => b + B[i][j]));
}
