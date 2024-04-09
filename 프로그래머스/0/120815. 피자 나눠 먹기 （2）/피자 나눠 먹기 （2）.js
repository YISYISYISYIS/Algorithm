function solution(n) {
    var answer = 0;
    
    for(let i = 1; i <= n; i++){
        if((i*6)%n === 0){
            return i;
        }
    }
    answer = i;
    return answer;
}