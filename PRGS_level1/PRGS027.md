# 최대공약수와 최소공약수

```js
function solution(n, m) {
    let answer = [];

    for(let i = 1; i <= n; i++) {
        if(n % i == 0 && m % i == 0) {answer[0] = i;}
    }

    answer[1] = n * m / answer[0];

    return answer;
}
```

<br>

## Reference

[Programmers](https://programmers.co.kr/learn/courses/30/lessons/12940)