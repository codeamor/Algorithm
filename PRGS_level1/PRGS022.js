// 자릿수 더하기
// 바로 끝날 문제였는데 reduce메서드 내부의 자료형을 잠시 헷갈렸다.
// 누적값 acc는 처음에 초기값인 0인 숫자를 저장했고,
// 더해 갈 현재 값 cur은 split으로 쪼개버린 배열의 원소인 문자열이다.
// JS에서 숫자+문자열은 문자열이므로 숫자끼리 합치길 바란다면 현재값을 누적값에 맞게
// 숫자로 변환시켜야 한다.

function solution(n) {
  let str = String(n);
  let result = str.split("").reduce((acc, cur) => acc + Number(cur), 0);

  return Number(result);
}

// 다르게 풀어보기

function solution(n) {
  let sum = 0;
  let arr = Array.from(String(n));
  arr.forEach((i) => {
    sum += parseInt(i);
    console.log(sum);
  });
  return sum;
}

// 다른 사람 풀이 1
// 문자열에 곱하기 1을 해주면 숫자가 된다.

function solution(n) {
  var answer = 0;

  n = "" + n;
  for (var i = 0; i < n.length; i++) {
    answer += n.charAt(i) * 1;
  }

  return answer;
}
