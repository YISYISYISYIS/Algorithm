function solution(numLog) {
    var answer = '';
    for(let i = 1; i < numLog.length; i++){
        let tempNum = numLog[i] - numLog[i-1];
        if(tempNum === 1){
            answer += "w";
        }else if(tempNum === -1){
            answer += "s";
        }else if(tempNum === 10 ){
            answer += "d";
        }else if(tempNum === -10){
            answer += "a"
        }
    }
    return answer;
}