function solution(n) {
    var answer = 0;
    //약수는 어떤수를 나눠 떨어지게하는 수임. %가 0인경우만 구해서 더해주면됨
    for(let i = 1; i <= n; i++){
        if(n % i === 0){
            answer += i;
        }
    }
    return answer;
}