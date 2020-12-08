# 다트 게임

```js
function solution(dartResult) {
    // 배열에 빈 문자열 3개를 넣는다.
    let result = Array(3).fill('');
    // 다트의 배율 영역에 접근하기 위한 인덱스
    let index = 0;
    
    dartResult.split('').forEach(str => {
        // 숫자가 아니면
        if (isNaN(str)) {
            // 숫자로 넘어가기 위해 인덱스를 하나 더한다.
            if (result[index]) {
                index++;
            }
            // 순회문의 탐색에서 숫자에 해당되는 경우의 조건문
            switch (str) {
                case 'S':
                    result[index - 1] = result[index - 1] ** 1;
                    break;
                case 'D':
                    result[index - 1] = result[index - 1] ** 2;
                    break;
                case 'T':
                    result[index - 1] = result[index - 1] ** 3;
                    break;
                case '*':
                    // 이전 다트 회차의 배율에 2배를 하고, 현재 배율에도 2배를 한다.
                    result[index - 2] *= 2;
                    result[index - 1] *= 2;
                    break;
                case '#':
                    result[index - 1] *= -1;
                    break;
            }
        } 
        // 숫자이면
        else {
            result[index] += str;
        }
    });
    
    return result.reduce((acc, cur) => acc + cur);
}
```
<br>

> 다른 사람 풀이 1

```js
function solution(dartResult) {
    var res = [];
    var map = {'S': 1, 'D': 2, 'T': 3};
    var darts = dartResult.match(/(?:\\d+\\w)|[#*]/g);
    for (var i = 0; i < darts.length; ++i) {
        if (darts[i] === '*') {
            if (res.length > 1) res[res.length-2] *= 2;
            res[res.length-1] *= 2;
        } else if (darts[i] === '#') {
            res[res.length-1] *= -1;
        } else {
            res.push(Math.pow(darts[i].slice(0, -1), map[darts[i].slice(-1)]));
        }
    }
    return res.reduce((a, b) => a + b);
}
```