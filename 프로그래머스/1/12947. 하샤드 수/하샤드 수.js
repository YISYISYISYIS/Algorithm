function solution(x) {
    var answer = true;
    //하샤드수가 뭐지?
    //x를 문자열로바꿔서 split쪼갠후 두숫자 더한값을 세이브
    //x나누기 더한값이 나머지0일때 true,아니면 false
    let total = 0;
    let tempNum = x.toString().split("")
    for(let i = 0; i < tempNum.length; i++){
        total += Number(tempNum[i]);
    }
    if(x % total === 0){
        answer = true;
    }else{
        answer = false;
    }
    return answer;
}

// function solution(x) {
// var answer = true;


// let total = 0;
// let tempNum = x.toString().split("")
//     tempNum.forEach((item)=>{
//     total += Number(item);
// });
// if(x % total === 0){
//     answer = true;
// }else{
//     answer = false;
// }
// return answer;
// }