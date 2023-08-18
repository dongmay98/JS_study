const oneTwoThree = [1, 2, 3];

// 배열.reduce((누적값, 현잿값, 인덱스, 요소) => { return 결과 }, 초깃값);
// 이전값이 아니라 누적값이라는 것에 주의하셔야 합니다. 누적값이기 때문에 다양하게 활용할 수 있습니다.
result = oneTwoThree.reduce((acc, cur, i) => {
  console.log(acc, cur, i);
  return acc + cur;
}, 0);      // 초깃값을 0으로 설정
// 0 1 0
// 1 2 1
// 3 3 2
result; // 6

/////////////////////////////
result = oneTwoThree.reduce((acc, cur, i) => {
  console.log(acc, cur, i);
  return acc + cur;
});     // 초깃값 없음. 자동으로 초깃값은 0번째 인덱스의 값이 된다.
// 1 2 1
// 3 3 2
result; // 6 

