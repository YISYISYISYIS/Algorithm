function solution(x, n) {
    var answer = [];
    //x만큼 증가라서 누적변수에 x값을 반복문으로 더해주면서
    //그값을 바로 push로 넣기.
    let tempNum = 0;
    
    for(let i = 0; i < n; i++){
        tempNum += x;
        answer.push(tempNum);
    }
    return answer;
}