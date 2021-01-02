# 자연수 뒤집어 배열로 만들기

```js
function solution(n) {
  return n
    .toString()
    .split("")
    .map((el) => Number(el))
    .reverse();
}
```

<br>

> 다른 풀이

```js
function solution(n) {
  return (n + "")
    .split("")
    .reverse()
    .map((n) => parseInt(n));
}
```
