// forEach역할도 하면서 return을 해준다. return 값을 새로운 배열에 생성해줌. 기존배열을 건들지 않는다.
// map은 배열을 1대1로 짝짓되 기존 객체를 수정하지 않는 메서드입니다.
// 배열.map((요소, 인덱스, 배열) => { return 요소 });
const arr1 = [1,2,3,4];

const answer = [];  // 이걸 map으로 가능.
for(let i=0; i<arr1.length; i++){
  answer.push(arr1[i] * 2);
}

const arr2 = arr1.map((value,index)=>value *2);
///////////////////////////
const res3 = arr1.map((value,index)=>`#${index} #${value}`);

const arr3 = Array(9).fill(0) /// 0이 9개가있는 배열생성.
const arr4 = Array(9).fill(0).map((el,idx)=>{
  return idx+1;       // return 한 값이 el에 들어감.
})


const items = [{id:1, name:'sdh'}, {id:2, name:'jjj'}];

const result = items.map((item)=> {id: item.id}); // 소괄호 필요 객체리터럴로 해석하지못해서.
const result1 = items.map((item)=> {
  return {id: item.id}
});


