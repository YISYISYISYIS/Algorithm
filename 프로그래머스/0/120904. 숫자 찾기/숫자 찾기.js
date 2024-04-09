function solution(num, k) {
    var answer = 0;
    let tempStr = num.toString();
    let tempNum = tempStr.split("");
    let findNum = tempNum.indexOf(k.toString());
    
    if(findNum === -1){
        answer = -1;
    }else{
        answer = findNum + 1;
    }
    return answer;
}