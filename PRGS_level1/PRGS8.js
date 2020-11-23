// 두 정수 사이의 합

function solution(a, b) {
    let answer = 0;
    let bigger = Math.max(a, b);
    let smaller = Math.min(a, b);
    
    for (let i = smaller; i <= bigger; i++) {
        answer += i;
    }
    return answer;
}

// 다른 사람 풀이

function solution(a, b) {
    let answer = 0;
    return (a+b)*(Math.abs(b-a)+1)/2;
}