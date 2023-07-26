// 버튼 0 누르면
// - 모든 버튼에 붙은 orange 클래스명 제거.
// - 버튼 0에 orange 클래스명 추가
// - 모든 div에 show 클래스 제거
// - div 0에 show 클래스명 추가


// for(let i=0; i<$('.tab-button').length; i++){
//     $('.tab-button').eq(i).on('click',function(){
//         탭열기(i)
//     });
// }



// $('.list').on(click,function(e){
//     // 지금 누른게 버튼0이면 버튼0에 탭열기 (0)
//     if(e.target ==document.querySelectorAll('.tab-button')[0] ){
//         탭열기(0)
//     }
    
// })

$('.list').on('click',function(e){
    console.log(e.target.dataset.id);
    탭열기(e.target.dataset.id)
    
})

function 탭열기(숫자){
    $('.tab-button').removeClass('orange');
    $('.tab-button').eq(숫자).addClass('orange');
    $('.tab-content').removeClass('show');
    $('.tab-content').eq(숫자).addClass('show');
    }