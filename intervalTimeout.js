/* setInterval */

function displayConsole() {
    console.log('여기는 console 이다');
}

// 페이지가 로딩후 5초마다 displayConsole 함수 호출 
let test1 = setInterval(displayConsole, 5000); // 여기는 console 이다.

function disConsole(param1, param2) {
    console.log(`${param1} .... ${param2}`);
}

// 페이지 로딩후 3초마다 disConsole 함수 실행 
let test2 = setInterval(disConsole, 3000, 'kong', 'woojeong'); // kong .... woojeong

/* clearInterval */

// setInterval 함수 초기화
// setInerval 함수를 할당한 변수를 매개변수에 넣어서 해당 setInverval 함수를 초기화 한다. 
clearInterval(test1);
clearInterval(test2);

/* setTimeout */

function testFn() {
    console.log('setTimeout 테스트');
}

let test3 = setTimeout(testFn, 2000); // 페이지 로딩후 2초후 해당 함수 호출

function testFn2(param1, param2) {
    console.log(`${param1} .... ${param2}`);
}

let test4 = setTimeout(testFn2, 2000, 'setTimeout', '테스트중'); // 페이지 로딩후 2초후 해당 함수 호춯

/* clearTimeout */

// clearTimeout() 초기화
// setTimeout 함수를 할당한 변수를 매개변수에 넣어서 해당 setInverval 함수를 초기화 한다. 
clearTimeout(test3);
clearTimeout(test4);