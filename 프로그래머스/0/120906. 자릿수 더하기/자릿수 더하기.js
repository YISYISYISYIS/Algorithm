function solution(n) {
    var answer = 0;
    n = String(n).split('');
    answer = n.reduce((num1,num2) => Number(num1) + Number(num2),0);
    return answer;
}