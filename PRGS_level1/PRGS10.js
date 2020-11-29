// 예산

function solution(d, budget) {
    let totBudget = 0;
    let dSorted = d.sort((a, b) => a - b);
    let result = dSorted.filter((el) => {
        totBudget += el;
        
        // budget - totBudget >= 0 ? budget - totBudget : null;
        // 이건 왜 안되지?
        
        return budget - totBudget >= 0;
    }
    )
    console.log(result);
    
    return result.length;
}

// 다른 사람 풀이 1
// reduce, pop
// 반복문 돌 때마다 reduce와 pop을 사용하는 것은 효율성이 안좋다고 함.

function solution(d, budget) {
    d.sort((a, b) => a - b);

    while (d.reduce((a, b) => (a + b), 0) > budget) d.pop();

    return d.length;
}

// 다른 사람 풀이 2
// 틸드 연산자: ~ (난생 처음 봄..) -> ~N은 -(N+1)

function solution(d, budget) {
    return ~(~d.sort((a,b)=>a-b).map(v => budget -= v).findIndex(v => v < 0) || ~d.length);
}

// 다른 사람 풀이 3
// forEach

function solution(d, budget) {
    let answer = 0;
    let money = 0;
    d.sort((a,b) => a-b).forEach(function(val){
        money += val;
        if(money <= budget){
            answer++;    
        }

    })
    return answer;
}