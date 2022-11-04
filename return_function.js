function coreFunc(props) {
  props = typeof props === "string" ? props : String(props);
  return `${props}`;
}
// ? coreFunc() 구조
// ? 매개변수 prop은 인자(argument)로 들어오는 타입이 문자열이거나
// ? 아니라면 강제로 데이터 형변환을 하는 간단한 조건문이 설치된 간단한 함수이다.
// * 리턴은 "문자열" 외에는 처리할 수 없다.

function combineFunc(first, second, callback) {
  let combineValue = first + second;
  return `
    ${callback(combineValue)}
  `
}
// ? combineFunc() 구조
// ? 첫 번째, 두 번째 매개변수에 해당하는 first, second는
// ? 지역변수 combineValue 대입연산자 '우항'에서 결합하는 실행이 존재한다.

// * 특이한 점은 세 번째 매개변수는 '콜백함수'이다.
// * 함수를 사용하긴 할 것이지만, 어떤 실행이 될지는 '호출할 때 결정하는 구조'이다.
// * "만들 예정인" 콜백함수의 첫 번째 인자는 지역변수 combineFunc으로 '약속'되어있다.
// * 술어로 표현하면
// * "함수를 사용할 예정이긴 한데, 첫 번째 매개변수는 정해졌지만, 무슨 알고리즘인지는 호출할 때 작성할게" 가 된다. 심도 깊은 이해를 위해 상당히 헷갈리게 구조를 작성했으므로 자세히 확인할 것

let prac = combineFunc(coreFunc('안녕하세요'), coreFunc('가파이어'), function(value) {
  return coreFunc(value) + "님";
})
// ? prac이 가리키는 값
// ? combineFunc()를 호출한 어떤 값을 변수 prac에 대입했다.

// * 함수 호출, function call 부분을 확인하면
// * 인자(argument) 자리에 coreFunc() 함수 호출한 것을 알 수 있다.
// * 이것이 가능한 이유는 coreFunc()는 선언할 땐 함수이지만 호출할 땐 리턴 때문에 문자열이 된다. 
// * 즉 문자열 두 개를 부른 것과 다르지 않다.

// * 세 번째 마지막 콜백함수는 '제작자가 작성할 예정이었던 알고리즘 자리'에 해당한다.
// * combineFunc() 선언할 때 작성한 callback()이란 함수(아무런 알고리즘도 없는)에 지역변수 combineValue가
// * 활용된 것을 알 수 있다.
// * 그리고 그것이 prac 변수를 통한 호출 부에서 value라는 이름으로 "인자를 전달 받았다"
// * 이것은 마치 promise 문법의 .then(data)와 흡사하고, .request.on("data", function(err, data)), addeventListener("type", function(event){}) 내장 메서드의 '인자를 전달받은 개념'과 완전히 일치한다.
console.log(prac);