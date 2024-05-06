function solution(num) {
    var answer = 0;
    //원하는정답은 반복횟수
    //반복문안에 조건문실행후 누적값변수를 1씩 증가시키면서
    //num값은 계속 반복문안에서 1될때까지 
    //1되면 그동안 누적값을 반환후 리턴으로 함수종료
    //500번까지만 돌고 그때도 안되면 -1리턴
    
    for(let i = 0; i < 500; i++){
        if(num === 1){
            return answer;
        }else if(num % 2 === 0){
            num = num/2;
        }else if(num % 2 !== 0){
            num = (num*3)+1;
        }
        answer++;
    }
    return -1;
}