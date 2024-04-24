function solution(num) {
    var answer = '';
    //짝수 홀수를 구분하는법.  num%2 === 0;이면 짝수
    //0도 짝수로 조건걸림
    if(num % 2 === 0){
        answer = "Even";
    }else{
        answer = "Odd"
    }
    return answer;
}