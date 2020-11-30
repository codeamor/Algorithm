// [카카오 인턴] 키패드 누르기
// 결국 못 품, 수정 예정
// 함수형으로도 리팩토링 해보기

function solution(numbers, hand) {
  let result = [];
  let leftPos = '*';
  let rightPos = '#';

  numbers.forEach(keypad => {
    if (keypad === 1 || keypad === 4 || keypad === 7) {
      result.push('L');
      leftPos = keypad;
    }

    if (keypad === 3 || keypad === 6 || keypad === 9) {
      result.push('R');
      rightPos = keypad;
    }

    // 가운데 열 키패드가 주어졌을 때 현재 손 위치와의 거리 계산.. 
    // 특정 숫자들에 따라 왼쪽, 가운데, 오른쪽 패드가 결정된다.
    // 함수의 인자: 현재 키패드, 가운데 패드
    // 이 함수에서 반환해야 하는 값: 두 좌표 사이의 거리
    // 필요한 변수:
    // 1. currentKeypad 인자에 의해 결정되는 keyObj
    // 2. center 인자에 의해 결정되는 keyObj
    function Dist(currentKeypad, centerKeypad) {
      let keyObj = {
        // '*'을 원점으로 하는 좌표계
        1: [3, 0],
        2: [1, 3],
        3: [2, 3],
        4: [0, 2],
        5: [1, 2],
        6: [2, 2],
        7: [0, 1],
        8: [1, 1],
        9: [2, 1],
      }

      let currentKeyObj = keyObj[currentKeypad]; // [x1, y1]
      let centerKeyObj = keyObj[centerKeypad]; // [x2, y2]

      // 두 점 사이의 거리 반환
      // 원래 두 점 사이의 거리는 x좌표, y좌표 차이 제곱 더해서 루트 제곱근 씌우는 건데
      // 여기서는 그 거리를 구할 필요까진 없고 위치 상의 차이의 순서만 알면 된다.
      // 음수도 나오므로 Math.abs()
      return Math.abs((centerKeyObj[0] - currentKeyObj[0]) + (centerKeyObj[1] - currentKeyObj[1]));
    }
    // numbers의 원소 중 가운데 키패드에 해당하는 원소가 왔을 경우 함수가 실행되어 거리를 구하게 해야 한다.
    let leftDist = Dist(leftPos, keypad);
    let rightDist = Dist(rightPos, keypad);
      
    leftDist === rightDist ? (hand === left ? (result.push('L'), leftPos = keypad) : (result.push('R'), rightPos = keypad)) : null
    });

    leftDist > rightDist ? (result.push('R'), leftPos = keypad) : (result.push('L'), rightPos = keypad)

  return result;
}


// 다른 사람 풀이 1

function calDist(num, leftNow, rightNow, pos, handed){
    const X = 0, Y = 1
    const leftDist = Math.abs(pos[leftNow][X] - pos[num][X]) + 
        Math.abs(pos[leftNow][Y] - pos[num][Y])
    const rightDist = Math.abs(pos[rightNow][X] - pos[num][X]) + 
        Math.abs(pos[rightNow][Y] - pos[num][Y])
    // 거리가 같으면
    if (leftDist === rightDist) return handed === 'right' ?  'R' : 'L';
    return leftDist > rightDist ? 'R' : 'L'
}

function solution(numbers, hand) {
    // 왼손잡이인지 오른손잡이인지
    const HANDED = hand;
    // 번호 좌표화
    const position = {
        1: [0, 0], 2: [0, 1], 3: [0, 2],
        4: [1, 0], 5: [1, 1], 6: [1, 2],
        7: [2, 0], 8: [2, 1], 9: [2, 2],
        '*': [3, 0], 0: [3, 1], '#': [3, 2]
    };
    // 손 위치 초기화
    let rightNow = '#', leftNow = '*';
    // solution
    let result = ''
    for (const num of numbers){
        // 왼쪽 키라인
        if (num % 3 === 1){
            result += 'L';
            leftNow = num;
        }
        // 오른쪽 키라인
        else if (num !==0 && num % 3 === 0){
            result += 'R';
            rightNow = num;
        }
        // 중간 키라인
        else{
            result += calDist(num, leftNow, rightNow, position, HANDED)
            result[result.length-1] === 'L'? leftNow = num : rightNow = num
        }
    }

    return result;
}

// 다른 사람 풀이 2
// 정규식은 왜 항상 떠올리지 못할까

function solution(numbers, hand) {
  hand = hand[0] === "r" ? "R" : "L"
  let position = [1, 4, 4, 4, 3, 3, 3, 2, 2, 2]
  let h = { L: [1, 1], R: [1, 1] }
  return numbers.map(x => {
    if (/[147]/.test(x)) {
      h.L = [position[x], 1]
      return "L"
    }
    if (/[369]/.test(x)) {
      h.R = [position[x], 1]
      return "R"
    }
    let distL = Math.abs(position[x] - h.L[0]) + h.L[1]
    let distR = Math.abs(position[x] - h.R[0]) + h.R[1]
    if (distL === distR) {
      h[hand] = [position[x], 0]
      return hand
    }
    if (distL < distR) {
      h.L = [position[x], 0]
      return "L"
    }
    h.R = [position[x], 0]
    return "R"
  }).join("")
}