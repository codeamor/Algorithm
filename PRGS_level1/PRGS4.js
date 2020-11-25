// 체육복
function solution(n, lost, reserve) {
  let answer = n - lost.length; // 체육수업을 들을 수 있는 학생 수

  // case2) 잃어버린 학생이 여별 옷을 가지고 있는 경우의 순회문
  for (let i = 0; i < lost.length; i++) {
    for (let j = 0; j < reserve.length; j++) {
      if (lost[i] === reserve[j]) {
        lost.splice(i, 1);
        reserve.splice(j, 1);
        answer++;
        i--;
        break;
      }
    }
  }

  // case1) 잃어버린 학생의 앞, 뒤의 학생이 여벌 옷을 가지고 있는 경우의 순회문
  for (let i = 0; i < lost.length; i++) {
    for (let j = 0; j < reserve.length; j++) {
      if (reserve[j] === lost[i] - 1 || reserve[j] === lost[i] + 1) {
        lost.splice(i, 1);
        reserve.splice(j, 1);
        answer++;
        i--;
        break;
      }
    }
  }

  return answer;
}