function solution(n) {
    var answer = [];
    let tempNum = n;
    
    for(let i = 2; i <= tempNum; i++){
        if(tempNum % i === 0){
            answer.push(i);
            while(tempNum % i ===0){
                tempNum /= i;
            }
        }
    }
    return answer;
}