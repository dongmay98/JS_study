// filter
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result1 = arr.filter(v => v % 2 === 0);

// filter는 return 값이 true인 것만 모아서 새로운 배열을 만듭니다.
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result2 = arr1.filter(v => {
    return true
})
result

const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result3 = arr2.filter(v => {
    return false
})
result




// filter는 메서드 체이닝으로 많이 사용됩니다.