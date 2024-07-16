function solution(myString, pat) {
    var answer = 0;
    let tempStr = myString.toLowerCase();
    let tempPat = pat.toLowerCase();
        if(tempStr.includes(tempPat)){
            answer = 1;
        }else{
            answer = 0;
        }
    
    return answer;
}