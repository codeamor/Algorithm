// 정수 제곱근 판별

function solution(n) {
  let x = 1;

  while (x * x <= n) {
    if (x * x === n) return (x + 1) * (x + 1);
    x++;
  }

  return -1;
}

// 다른 사람 풀이 1

function nextSqaure(n) {
  var result = 0;
  var x = 0;
  while (x * x < n) {
    x++;
  }
  if (x * x == n) {
    x++;
    result = x * x;
  } else {
    result = -1;
  }

  return result;
}

// 다른 사람 풀이 2
// switch

function nextSqaure(n) {
  //함수를 완성하세요
  switch (n % Math.sqrt(n)) {
    case 0:
      return Math.pow(Math.sqrt(n) + 1, 2);
    default:
      return -1;
  }
}

// * Math.sqrt(): 제곱근
// * Math.pow(a, b): a의 b제곱수

// 다른 사람 풀이 3
// 변수 n에 제곱근을 담아서 그것이 정수인지 따지는 것을 이용해 삼항연산자 적용

function nextSqaure(n) {
  var result = 0;
  var n = Math.sqrt(n);
  result = Number.isInteger(n) ? Math.pow(n + 1, 2) : -1;
  return result;
}

// 다른 사람 풀이 4
// parseInt
// 삼항연사자의 조건이 신박하다. 제곱수의 제곱근과 원래 수는 같다는 조건은 당연하지만서도 떠올리기 힘들다.

function nextSqaure(n) {
  var root = Math.sqrt(n);
  var result = parseInt(root) - root === 0 ? (root + 1) * (root + 1) : -1;
  return result;
}
