// 문자열 내 p와 y의 개수

// 1. 'p'의 개수와 'y'의 개수를 비교하여 같으면 True, 다르면 False를 반환
// 2. 'p'와 'y' 모두 없는 경우는 항상 True
// 3. 개수 비교할 때 대문자와 소문자는 구별하지 않음

function solution(s) {
  let numP = 0;
  let numY = 0;

  // 1. 개수 비교 문제이니 일치 여부를 따져서 카운트를 증가시키자.
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'p' || s[i] === 'P') {
      numP++;
    }
    if (s[i] === 'y' || s[i] === 'Y') {
      numY++;
    }
  }
  return numP === numY ? true : false;

  return answer;
}

// 다른 사람 풀이 1
// toUpperCase로 대소문자 조건 스킵
// split을 이용한 개수 비교

function numPY(s){
    return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
}

// 다른 사람 풀이 2
// 정규식, match 사용
// /p/: 문자열 p와 정확히 일치하는 곳에 대응
// /i: case insensitive, 대소문자 구별을 하지 않겠다.
// /g: 전역 매칭을 하겠다.

function numPY(s) {
  return s.match(/p/ig).length == s.match(/y/ig).length;
}

// 다른 사람 풀이 3
// 비구조화 할당
// reduce 메서드

function numPY(s){
  const sArr = s.split('');
  const {p, y} = sArr.reduce((acc, c) => {
    if (c.toLowerCase() === 'p') acc.p += 1;
    else if (c.toLowerCase() === 'y') acc.y += 1;
    return acc;
  }, {p: 0, y: 0});

  return (p === y);
}
