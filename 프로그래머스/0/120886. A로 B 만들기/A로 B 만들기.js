function solution(before, after) {
    var answer = 0;
    let arrBefore = before.split("").sort().join("");
    let arrAfter = after.split("").sort().join("");
    
    if(arrBefore === arrAfter){
        answer = 1;
    }else{
        answer = 0;
    }
    return answer;
}