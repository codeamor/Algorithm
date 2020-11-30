// 내적

function solution(a, b) {
    let result = 0;
    
    for(let i = 0; i < a.length; i++) {
        result += a[i] * b[i];
    }
    return result;
}

// 다른 사람 풀이 1
// reduce

function solution(a, b) {
    return a.reduce((acc, _, i) => acc += a[i] * b[i], 0);
}

// 다른 사람 풀이 2
// map과 reduce

function solution(a, b) {
   return a.map((a,i)=> a*b[i]).reduce((acc,val)=>{
        return acc+val;
    }, 0)
}

// 다른 사람 풀이
// for..in

function solution(a, b) {
    var answer = 0;
    for(var key in a){
        answer += a[key]*b[key];
    }
    return answer;
}