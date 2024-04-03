// function solution(str1, str2) {
//     var answer = 0;
//     if(str1.includes(str2)){
//         answer = 1;
//     }else{
//         answer = 2;
//     }
//     return answer;
// }


function solution(str1, str2) {
    var answer = 0;
    if(str1.split(str2).length > 1){
        answer = 1;
    }else{
        answer = 2;
    }
    return answer;
}