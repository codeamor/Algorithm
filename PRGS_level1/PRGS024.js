// < 문자열 내 마음대로 정렬하기 >

function solution(strings, n) {
  // sort()만으로 n번째 인덱스 원소에 의한 오름차순 배열을 만족시키기 위해 map을 써서 strings 앞에 n번째 원소를 붙였다.
  let arr = strings.map((el, idx) => {
    return el[n] + el;
  });

  // 오름차순 정렬이 되었으므로 앞에 붙였던 n번째 원소를 제외한 나머지 문자열을 리턴한다.
  let result = arr.sort().map((el) => {
    return el.slice(1, el.length);
  });

  return result;
}

// 다른 사람 풀이 1
// sort라는 정렬 메서드 안에서 정렬을 다루는 localeCompare를 사용했다.

function solution(strings, n) {
  return strings.sort((s1, s2) =>
    s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n])
  );
}

// 처음에 이 풀이를 보고 이해가 바로 안됐었는데 정리하자면
// 1. sort() 메서드에서 인자 두 개를 받을 경우 배열의 두 원소를 탐색하면서 리턴값의 부호에 따라 오름차순, 내림차순을 결정한다.
// 2. 화살표 함수의 리턴 부분에서 strings 배열의 두 원소의 n번째 인덱스에 해당하는 값이 같은지를 삼항연산자의 조건으로 따졌다.
// 3. localeCompare() 메서드는 문자의 사전 배열을 따져서 부호(+, 0, -)를 리턴하여 이를 기준으로 sort() 메서드에게 정렬을 지시하게 된다.
// 3. 값이 같으면 문제에서 제시한 test case의 2번에 해당되고, s1.localeCompare(s2)로 인해 strings 의 원소단에서 정렬이 이루어진다.
// 4. 같이 다르면 test case 1번에 해당되고, strings 배열의 원소 하나하나의 알파벳에 접근하여 정렬을 하게 된다.

// < 문자열 다루기 기본 >
// 결과 리턴 한 번만 해줘도 되는데 느려져서 두 번 했다.

function solution(s) {
  let result = false;

  if (s.length == 4 || s.length == 6) {
    result = true;

    for (let i in s) {
      if (isNaN(s[i])) {
        return (result = false);
      }
    }
    return result;
  }
  return result;
}

// 다른 사람 풀이 1
// * 정규식
// ^: 문자열의 시작
// $: 문자열의 끝

function solution(s) {
  let regex = /^\d{6}$|^\d{4}$/;

  return regex.test(s);
}

// 여기서 문자를 포함하는지에 대한 유무를 따지는 조건은 \d{} 정규식에서 이미 숫자만 리턴하게 됐으므로 건너뛰게 되었다.
