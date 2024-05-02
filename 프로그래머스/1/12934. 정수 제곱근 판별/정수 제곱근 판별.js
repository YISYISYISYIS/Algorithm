function solution(n) {
    var answer = 0;
    // x*x가 n이면 x+1 * x+1을 값을 리턴하고  
    // 아니면 -1을 리턴
    
    for(let i = 1; i <= n; i++){
        if(i*i === n){
            answer = (i+1)*(i+1);
            break;
        }else{
            answer = -1;
        }
    }
    return answer;
}