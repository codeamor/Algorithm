// 모의고사
function solution(answers) {
  let result = [];
  // * 생각의 질서
  // 1. 일단 규칙성을 한 묶음으로 생각
  let firstPerson = [1, 2, 3, 4, 5];
  let secondPerson = [2, 1, 2, 3, 2, 4, 2, 5];
  let thirdPerson = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  // 2. 최대 문제 개수와 정답 종류가 5개인 점은 문제에서 fix했으니 고려하지 않음
  // 3. 정답을 맞추면 점수가 생기니 그것을 담을 변수가 필요하다.
  // -> 사람이 세 명이니 인덱스를 가진 배열로 점수를 관리하면 나중에 편할 듯 싶다.
  let score = [0, 0, 0];
  // 4. 개별 변수와 그에 종속된 점수 변수가 선언되었으니 당연히 순회문을 생각해본다.
  // -> 서로 독립적인 변수를 연관지어주기 위해
  for (let i = 0; i < answers.length; i++) {
    // 5. 첫 번째 수포자의 정답과 정답이 같을 경우
    // answers 배열은 최대 1만개.. 각 사람이 찍을 수 있는 문제도 최대 1만개
    // 각 사람의 정답 배열은 이미 내가 규칙성을 담은 배열로 선언했다.
    // 첫 번째 사람의 경우, 인덱스 5부터 없는 값이 되버리는데 이러면 안되니
    // 모듈러 연산자로 최대 1만개의 문제를 각 사람의 찍기 유형 배열의 길이로 나누어서 answers 배열의 값과 비교해야 했었다.
    // 처음에는 생각하지 못했던 부분.
    if (firstPerson[i % 5] === answers[i]) {
      // 6. 여기서 점수 증가량은 3개의 독립 변수에 대해 양에 상관없이 같은 값만 증가시켜주면 될 것 같다.
      score[0]++;
    }
    // 7. 여기서 다른 독립 변수에 대한 조건문을 적을 때, if / else if / else 에서 골라야 한다면 앞의 조건에 상관 없이 적용되야 하므로 각각의 if를 사용해야 할 것 같다.
    if (secondPerson[i % 8] === answers[i]) {
      score[1]++;
    }
    if (thirdPerson[i % 10] === answers[i]) {
      score[2]++;
    }
  }
  // 8. 정답이 일치하면 점수를 증가시켰으니 이제 어느 수포자의 점수가 높은지 찾아서 리턴해야 한다.
  // -> 최대값이면 Math.max를 바로 생각해야 한다.
  // -> score 라는 배열 안에서의 최대값을 찾아야 한다.
  let max = Math.max(...score);
  // 9. 최대값이 각 score에 있는지 확인하고 있으면 answers 배열에 넣는다.
  if (max === score[0]) {
    // 10. return 해야할 값은 수포자의 서수 숫자다.
    result.push(1);
  }
  if (max === score[1]) {
    result.push(2);
  }
  if (max === score[2]) {
    result.push(3);
  }
  result.sort(function (a, b) {
    return a - b;
  })
  return result;
}




// 다른 사람 풀이 - filter

function solution(answers) {
  var answer = [];
  var a1 = [1, 2, 3, 4, 5];
  var a2 = [2, 1, 2, 3, 2, 4, 2, 5]
  var a3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  var a1c = answers.filter((a, i) => a === a1[i % a1.length]).length;
  var a2c = answers.filter((a, i) => a === a2[i % a2.length]).length;
  var a3c = answers.filter((a, i) => a === a3[i % a3.length]).length;
  var max = Math.max(a1c, a2c, a3c);

  if (a1c === max) { answer.push(1) };
  if (a2c === max) { answer.push(2) };
  if (a3c === max) { answer.push(3) };


  return answer;
}

// 다른 사람 풀이 - 객체, forEach, filter, map

const solution = (answers) => {
  const cnt = [{ key: 1, value: 0 }, { key: 2, value: 0 }, { key: 3, value: 0 }];
  const pattern1 = [1, 2, 3, 4, 5];
  const pattern2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const pattern3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const pattern1Cnt = 5;
  const pattern2Cnt = 8;
  const pattern3Cnt = 10;

  answers.forEach((answer, i) => {
    if (pattern1[i % pattern1Cnt] === answer) cnt[0].value += 1;
    if (pattern2[i % pattern2Cnt] === answer) cnt[1].value += 1;
    if (pattern3[i % pattern3Cnt] === answer) cnt[2].value += 1;
  });

  const max = Math.max.apply(null, cnt.map(v => v.value));
  return cnt.filter(v => v.value === max).map(v => v.key);
};
