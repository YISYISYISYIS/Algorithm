function solution(n) {
    var answer = '';
    //홀수일때 수, 짝수일때 박을 반환하게 하고
    //배열로 밀어넣고, join으로 합치면 될거같다.
    let tempArr =[];
    for(let i = 1; i <= n; i++){
        if(i % 2 === 0){
            tempArr.push("박");
        }else{
            tempArr.push("수");
        }
    }
    answer = tempArr.join("");
    return answer;
}