function solution(s) {
    var answer = '';
    let tempArr = s.split("");
    let tempValue = {};
    
    for(let value of tempArr){
        if(tempValue[value]){
            tempValue[value] += 1;
        }else{
            tempValue[value] = 1;
        }
    }
    for(let value in tempValue){
        if(tempValue[value] < 2){
            answer += value;
        }
    }
    answer = answer.split("").sort().join("");
    return answer;
}