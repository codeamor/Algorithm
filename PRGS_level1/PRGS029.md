# 이상한 숫자 만들기

```js
function solution(s) {
  return s
    .split(" ")
    .map((str) =>
      str
        .split("")
        .map((str2, i) => (i % 2 ? str2.toLowerCase() : str2.toUpperCase()))
        .join("")
    )
    .join(" ");
}
```
