function solution(n) {
    var answer = 0;
    //n을 나눳을때 나머지가 1인 첫번째 숫자를 출력하고 반복문을 멈춤
    let i = 1;
    while(true){
        if(n % i === 1){
           answer = i;
           break;
        }
        i++;
    }
    return answer;
}