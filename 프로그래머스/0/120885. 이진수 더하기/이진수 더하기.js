function solution(bin1, bin2) {
    var answer = '';
    let num1 = parseInt(bin1,2);
    let num2 = parseInt(bin2,2);
    let tempNum = num1+num2;
    
    answer = tempNum.toString(2);
    
    return answer;
}