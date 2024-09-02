function solution(intStrs, k, s, l) {
    var answer = [];

    for(let i = 0; i < intStrs.length; i++){
        let tempNum = Number(intStrs[i].slice(s,s+l));
        // console.log(tempNum)
        if(tempNum > k){
            answer.push(tempNum);
        }
    }
    
    return answer;
}