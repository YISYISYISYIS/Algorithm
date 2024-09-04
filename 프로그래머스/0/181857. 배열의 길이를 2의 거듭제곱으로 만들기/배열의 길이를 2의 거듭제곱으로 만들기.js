function solution(arr) {
    var answer = [...arr];
    let tempLength = 1;
    while(tempLength < arr.length){
        tempLength *= 2;
    }
    while(tempLength > answer.length){
        answer.push(0)
    }
    return answer;
}