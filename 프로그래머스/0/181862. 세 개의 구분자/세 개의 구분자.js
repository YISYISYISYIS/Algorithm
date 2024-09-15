function solution(myStr) {
    var answer = [];
    let tempStr = "";
    for(let i = 0; i < myStr.length; i++){
        if(myStr[i] !== "a" && myStr[i] !== "b" && myStr[i] !== "c"){
            tempStr += myStr[i];
        }else{
            if(tempStr.length > 0){
                answer.push(tempStr);
                tempStr = "";
            }
        }
    }
    if(tempStr.length > 0){
        answer.push(tempStr);
    }
    if(answer.length === 0){
        answer = ["EMPTY"]
    }
    return answer;
}