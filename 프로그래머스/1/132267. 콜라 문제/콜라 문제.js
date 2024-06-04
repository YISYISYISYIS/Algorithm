function solution(a, b, n) {
    var answer = 0;
    //n을 a로 나누고 나머지가 0인경우 아닌경우 나눔
    //나눈 값을 임시변수에 저장 ,나머지가 있는경우 나머지값도 저장
    //나머지값은 다시 n에 더해줌
    //이렇게 풀었는데 답이 아니란다. 도저히 모르겠다
    // let tempNum = 0; 
    // let tempOther = 0;
    // while(a <= n){
    //     if(n % a === 0){
    //         tempNum += (n / a) * b;
    //         n = (n / a)
    //     }else{
    //         tempNum += Math.floor(n / a);
    //         tempOther = n % a;
    //         n = Math.floor(n / a) + tempOther;
    //     }
    // }
    // answer = tempNum
    
    //일단 반복문은 a가 n을 나누고나누고나서 작을때까지가 조건문임 a병당 b콜라니까
    //그럼 while문 맞음
    // n을a로 나눈값일단 저장. a*나눈값을 n에서빼고 저장,n을 a로 나누고 나머지 값(빈병)을 더해줌
    //그값을 a보다 작을때까지 위를 반복
    //입출력값 공식을 그대로 적음 이해못한상태
    
    // while(a <= n){
    //     let tempNum = 0
    //     tempNum = Math.floor(n / a)*b; 
    //     n = (n-(a*tempNum))+tempNum;
    //     answer+= tempNum;
    //     console.log(tempNum)
    // }
    
    //또틀림
    //AI찬스
      while(a <= n){
        let tempNum = 0
        tempNum = Math.floor(n / a); 
        answer += tempNum * b;
        n = n % a + tempNum * b;
        
        console.log(tempNum)
    }
    
    return answer;
}