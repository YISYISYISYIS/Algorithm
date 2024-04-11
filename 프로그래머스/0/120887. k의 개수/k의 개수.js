function solution(i, j, k) {
    var answer = 0;
    let tempNum = "";
        
    for(i; i <= j; i++){
        tempNum += i;
    }
    let tempStr = tempNum.split("");
    
    for(let value = 0; value < tempStr.length; value++){
        if(tempStr[value] == k){
            answer++;
        }
    }
    return answer;
}