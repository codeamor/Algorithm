// 콜라츠 추측

function solution(num) {
    let result = 0;
    
    // num이 2일 때, result는 1 => num이 500 일때 result는 499
    // 문제에서 500번을 반복한다는 건 n이 500이 되는 걸 의미하지 않고, n이 2를 시작으로 500번의 작업을 거쳤다는 것을 의미한다.
    // 500번의 작업과 숫자적으로 대응되는 건 num이 아니라 result
    
    // 반복문 조건, num이 1이 되면, 500이 되면 탈출해야 한다.
    // num의 조건에 n == 1을 포함시키면x, 1이 되면 탈출해야 한다.
    while (num > 1 && result < 500) {
        // num의 값이 계속 바뀐다.
        num = num % 2 === 0 ? num / 2 : num * 3 + 1;
        // 위 작업이 반복될 때마다 result의 카운트 증가
        result++;
    }
    
    // 500이 되면 반복문 탈출, -1 반환
    // 연산자 순서, 산술 > 비교 > 논리 > 대입
    return (result === 500) ? -1 : result;
}

// 다른 사람 풀이 1
// 재귀

function solution(num, count = 0) {
    return num == 1 ? (count >= 500 ? -1 : count) : solution(num % 2 == 0 ? num / 2 : num * 3 + 1, ++count);
}

// * 전위 증감 연산자는 변수 자체의 값을 1 증가/감소해서 반환하지만
// 1. i = i + 1;  
// 2. return i;

// * 후위 증감 연산자는 다른 변수에 현재 변수 값을 저장하고 변수 값을 1 증가/감소하고 이전에 저장된 값을 반환한다.
// 1. const int temp = i;
// 2. i = i + 1;
// 3. return temp;

// => 두 연산자의 내부 동작이 다르다!

// - 위 풀이에서는 내부 함수의 두 번째 인자로 후위 증감 연산자를 사용하면 num의 값에 상관없이 count 값이 0이 되어 케이스 통과가 안된다.
// => 반환하는 값이 count가 아니라 내부적으로 임시로 생성된 상수 값(여기서는 초기 값 0)이 된다.


// 다른 사람 풀이 2
// 함수 분리

const solution = (num) => collatzGuessCount(num, 0);

const collatzGuessCount = (num, acc) => 
  (num === 1) ? ((acc > 500) ? -1 : acc) : collatzGuessCount(processCollatz(num), acc + 1);

const processCollatz = (num) => (num % 2 === 0) ? (num / 2) : (num * 3 + 1);