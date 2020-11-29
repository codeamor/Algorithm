// 수박

function solution(n) {
    let answer = '';
    
    for (let i = 1; i < n+1; i++) {
        answer += i % 2 ? "수" : '박';
    }
    return answer;
}

// 다른 사람 풀이 1
// repeat => 반복하여 새로운 문자열 반환

const waterMelon = n => "수박".repeat(n).slice(0,n);

// 다른 사람 풀이 2
// Good

function waterMelon(n){
  return [...Array(n).keys()].map(i => {
    if (i % 2 === 0) return "수";
    else return "박";
  }).join('');
}