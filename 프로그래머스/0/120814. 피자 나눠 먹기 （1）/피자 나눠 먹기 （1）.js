function solution(n) {
    var answer = 0;
    while(n > 0){
        n -= 7;
        answer += 1;
    }
    return answer;
}


// function solution(n) {
//     var answer = 0;
//     for(let i = 0; i < n; i+=7){
//         answer += 1;
//     }
//     return answer;
// }


// function solution(n) {
//     var answer = 0;
//     answer = Math.ceil(n/7)
//     return answer;
// }