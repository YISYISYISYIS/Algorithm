function solution(number) {
    var answer = 0;
    let tempNum = 0;
    for(let num of number){
       tempNum += Number(num)
    }
    answer = tempNum % 9;
    return answer;
}