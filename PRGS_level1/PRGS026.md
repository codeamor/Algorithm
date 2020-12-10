# 크레인 인형뽑기 게임

![image](https://user-images.githubusercontent.com/65898889/101800443-a1a06d00-3b50-11eb-8a0e-12ccc50fa3ca.png)

```js
function solution(board, moves) {
    let basket = [];
    let result = 0;
    let pick = 0;
    
    // 격자 행렬에서 moves의 길이에 따라 해당하는 열들을 순회
    for (let i = 0; i < moves.length; i++) {
        // board의 길이에 따라 moves[i]에 해당하는 열에 있는 요소들을 순회
        for (let j = 0; j < board.length; j++) {
            // 같은 열을 다시 선택하지 않게 해야 한다.
            if (board[j][moves[i] - 1] !== 0 && pick === i) {
                pick++;
                // 탐색한 요소가 바구니의 마지막 요소와 같은지를 따진다.
                if (basket[basket.length - 1] === board[j][moves[i] - 1]) {
                    // 같으면 그 요소를 제거한다.
                    basket.pop();
                    // 중복되는 요소가 바구니에 생겼으니 2 증가
                    result += 2;
                } 
                // 같지 않으면 바구니에 탐색한 요소를 넣는다.
                else {
                basket.push(board[j][moves[i] - 1]);
            }
            board[j][moves[i] - 1] = 0;
        }
      }
    }
    return result;
}
```
<br>

> 다른 풀이
- reduce, map, filter 등을 이용한 함수형 접근


```js
const transpose = matrix =>
    matrix.reduce(
        (result, row) => row.map((_, i) => [...(result[i] || []), row[i]]),
        []
    );

const solution = (board, moves) => {
    const stacks = transpose(board).map(row =>
        row.reverse().filter(el => el !== 0)
    );
    const basket = [];
    let result = 0;

    for (const move of moves) {
        const pop = stacks[move - 1].pop();
        if (!pop) continue;
        if (pop === basket[basket.length - 1]) {
            basket.pop();
            result += 2;
            continue;
        }
        basket.push(pop);
    }

    return result;
};
```

<br>

![image](https://user-images.githubusercontent.com/65898889/101800742-f2b06100-3b50-11eb-9f7f-45679d8c78e0.png)


## Reference

[Programmers](https://programmers.co.kr/learn/courses/30/lessons/64061)