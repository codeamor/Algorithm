// 핸드폰 번호 가리기
// 직사각형 별찍기 문제 때문에 repeat가 생각이 났다.
// 변수 선언한 거 합쳐서 한 번에 반환해도 된다.

function solution(phone_number) {
    let stars = '*'.repeat(phone_number.length - 4) 
    let numbers = phone_number.slice(-4);
    return stars + numbers;
}


// 다른 사람 풀이 1
// 정규식
// replace

function hide_numbers(s) {
  return s.replace(/\d(?=\d{4})/g, "*");
}

// \d =  0-9범위의 모든 자릿수에서
// {4} = 4개의 자릿수를 반환하겠다.
// regex1(?=(regex2)) => Positive Lookahead: regex1 에 regex2의 정규표현식이 뒤따르는 경우가 있을 경우 반환한다.
// http://stackoverflow.com/a/27545357/411615
// https://stackoverflow.com/questions/27545202/masking-last-4-digits-in-javascript

// 처음에 정규식의 Positive Lookahead가 생소하기도 하고 개념에서 preceding(followed by)이라는 말을 간과해서 왜 뒤의 4자리를 제외하고 replace 되는지 이해를 못했었다.
// 여기서는 뒤에 4자리의 자릿수가 오는 경우에만 "*"로 대체하는 식으로 쓰였다. 그리고  Positive Lookahead는 조건식을 사용하고 버리는데, 따라서 자동으로 여과된다.
// 즉, 뒤의 4자리의 자릿수가 오는 경우에만 모든 문자열을 문자열 "*"로 바꿀건데, 쓰였던 Positive Lookahead 조건식을 제외하고 바꿀 것이기 때문에
// 뒤의 4자리만 제외하고 문자열이 대체된다.


// 다른 사람 풀이 2
// substring

function hide_numbers(s){
  var result = Array(s.length-3).join("*") 
  var cut = s.substring(s.length-4) 

  return result+cut;
}


// 다른 사람 풀이 3
// fill

const solution = n => [...n].fill("*",0,n.length-4).join("")