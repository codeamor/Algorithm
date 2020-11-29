// 김서방 찾기

function solution(seoul) {
    for(let i in seoul) {
        if(seoul[i] == 'Kim') return `김서방은 ${i}에 있다`
    }
}

// 다른 사람 풀이 1
// for문 안써도 되구나
function solution(seoul) {
    return `김서방은 ${seoul.indexOf('Kim')}에 있다`;
}