// 가운데 글자 가져오기
// 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

// 첫 번째 풀이

function solution(s) {
  let answer = '';
  let idxOdd = Math.ceil(s.length / 2) - 1;
  let idxEven = s.length / 2;

  if (s.length % 2 === 0) {
    answer += s[idxEven - 1] + s[idxEven];
  }
  else {
    answer += s[idxOdd];
  }
  
  return answer;
}

// 두 번째 풀이

function solution(s) {
  let idx = s.length % 2;
  return s.substring(idx === 0 ? 1 : 2, idx === 0 ? 3 : 3 );
}