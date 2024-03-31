function solution(n) {
    var answer = 0;
    n = String(n).split('');
    answer = n.reduce((num1,num2)=>(+(num1)) + (+(num2)),0);
    return answer;
}