function solution(sides) {
    var answer = 0;
    let largeNum = Math.max(...sides);
    let smallNum = Math.min(...sides);
    let tempNum1 = 0;
    let tempNum2 = 0;
    
    for(let i = 1; i <= largeNum; i++){
        if(largeNum + smallNum > i && smallNum + i > largeNum){
            tempNum1 += 1;
        }
    }
    for(let i = 1; i <= largeNum + smallNum; i++){
        if(i < largeNum + smallNum && i > largeNum){
            tempNum2 += 1;
        }
    }
    answer = tempNum1 + tempNum2;
    return answer;
}