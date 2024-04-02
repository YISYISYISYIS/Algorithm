function solution(slice, n) {
    var answer = 0;
    while(n > 0){
        n -= slice;
        answer += 1;
    }
    return answer;
}


// function solution(slice, n) {
//     var answer = 0;
//     answer = Math.ceil(n/slice);
//     return answer;
// }