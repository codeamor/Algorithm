// 직사각형 별 찍기

process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    let result = '';
    for (var j = 0; j < b; j++) {
            for (var i = 0; i < a; i++){
                result += '*';
            }
        result += '\n';
    }
    console.log(result);
})

// 다른 사람 풀이 1
// 어제 수박 문제 풀었을 때 repeat 메서드를 봤었는데 for문을 하나만 돌려도 되서 좋은 것 같다.

process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    const row = '*'.repeat(a)
    for(let i =0; i < b; i++){
        console.log(row)
    }

});

// 다른 사람 풀이 2
// 함수 분리

process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    for (let i = 0; i < b; i++) {
        console.log(generateStar(a))
    }
});

function generateStar(num) {
    let star = '*'
    let retVal = ''
    for (let i = 0; i < num; i++) {
        retVal += star
    }
    return  retVal
}

// JavaScript 표준 입력

process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
});

// 파이썬에서의 입력
a, b = input().split()