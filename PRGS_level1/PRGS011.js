// 하샤드 수

function solution(x) {
    
    let sumEach = String(x).split('').reduce((acc, cur) => {
        return Number(acc) + Number(cur);
    })
    
    return x % sumEach === 0 ? true : false;
}

// 다른 사람 풀이 1
// 재귀 함수

function solution(x, i = 0,sum = 0) {
    return String(x).length === i ?
    x % sum === 0 :
    solution(x, i + 1, sum + String(x)[i] * 1);
}

// 다른 사람 풀이 2
// while문과 본질적인 접근(?)

function solution(n){
  let result ;
    let ori_n = n;
  let sum = 0;
  while(n){
    sum += n % 10;
    n /= 10;
    n = Math.floor(n);
  }
  if(ori_n % sum === 0)
    result = true;
  else
    result = false;
  return result;
}

// 다른 사람 풀이 3
// eval
// 실행 속도 매우 느림, mdn에서 해킹의 위험 때문에 절대 쓰지 말라고 당부함.
// 옛날에 파이썬으로 계산기 만들 때 썼었는데 추억이 돋는다.

function solution(x) {
    return x % eval([...x.toString()].join("+")) ? false : true;
}

// 다른 사람 풀이 4
// 잊고 있었던 parseInt

function solution(n){
  let result = 0;
  // 숫자를 문자열로 바꾸기 위해 이렇게도 할 수 있다.
  n = n + '';
  for(let i = 0; i < n.length; i++){
    let d = parseInt(n[i]);
    result += d;
  }

  return n % result === 0;
}