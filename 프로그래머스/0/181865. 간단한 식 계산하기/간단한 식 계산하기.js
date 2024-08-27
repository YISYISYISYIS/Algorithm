function solution(binomial) {
    var answer = 0;
    let tempStr = binomial.split(" ")
    // console.log(tempStr)
    if(tempStr[1] === "+"){
        answer = Number(tempStr[0]) + Number(tempStr[2]);
    }else if(tempStr[1] === "-"){
        answer = tempStr[0]-tempStr[2];
    }else if(tempStr[1] === "*"){
        answer = tempStr[0]*tempStr[2];
    }
    return answer;
}