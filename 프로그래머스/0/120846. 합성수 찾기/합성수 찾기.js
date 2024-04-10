function solution(n) {
    var answer = 0;
    let tempNum = [];
    for(let i = 2; i <= n; i++){
        for(let j = 2; j < i; j++){
            if(i%j === 0){
                tempNum.push(i);
                break;
            }
        }
    }
    answer = tempNum.length;
    return answer;
}