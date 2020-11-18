// 2016년

function solution(a, b) {
  // 생각의 질서
  // 1. 과거 년도 전체에서 윤년을 특정하는 것이 아니라 표본 자체가 2016년임
  // -> 이러면 윤년을 특정하는 알고리즘은 필요 없고 윤년에 대한 것만 고려하면 됨
  // 2. a, b 매개변수가 이미 1 <= a <= 12, 1 <= b <= 31의 범위 안에 있음
  // 3. 문제에서 요구하는 '요일'을 무엇으로 특정할 것인지?
  // -> 당연히 년, 월이 아니라 '일'로 특정시켜야 함
  // -> 배열의 인덱스로 접근

  // case1)
  // 1. 2016년의 말일을 모두 배열에 넣음
  // 2. 일자에 대한 변수 선언
  // 3. 순회문 돌리면서 일자에 대한 변수에 말일을 넣음
  // 4. 이렇게 하면 윤년에 대한 고려를 안해도 되나? 왜? 윤년이 발생한 2016년의 말일을 가지고 있는
  // 변수를 사용 중이므로
  // 5. 따라서 윤년이 아닌 case로 풀이 가능
  // 6. 말일에 주어진 b 값을 넣으면 31을 초과하는 일자가 됨
  // 7. 이것을 일주일로 나눈 나머지를 모듈러 연산자로 구하면 0~6 의 숫자가 나옴
  // 8. 이걸로 배열의 인덱스로 접근해서 요일을 구한다.
  let answer = '';
  let day = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  let lastDayOfMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let dayCount = 0;
  for (let i = 0; i < a - 1; i++) {
    dayCount += lastDayOfMonth[i]
  }
  // 2016년 1월 1일이 일요일이 아니라서 요일 차이만큼 더해준다.
  dayCount += b + 4;
  let remainCount = dayCount % 7;
  answer = day[remainCount];
  return answer;
}

// 다른 사람 풀이
// 메서드의 귀재다.
function getDayName(a, b) {
  var date = new Date(2016, (a - 1), b);
  return date.toString().slice(0, 3).toUpperCase();
}