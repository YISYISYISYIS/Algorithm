function solution(nums) {
    var answer = 0;
    //소수란? 1과 자기자신을 제외한 어떤수로도 나누어떨어지지않는 1보다 큰 자연수
    //세개의숫자비교. 3중첩반복문 말고 딱히 해결방안이 안떠오름
    //조건은 nums의 길이보다 작을때까지. j는 i+1, k는 k+1
    //3개의 수를 더해서 2부터 더한수까지 나눠서 나머지가 0인경우가 있으면 소수가아님. 반복문하나더필요
    for(let i = 0; i < nums.length; i++){
        for(let j = i+1; j < nums.length; j++){
            for(let k = j+1; k < nums.length; k++){
                let tempNum = nums[i]+nums[j]+nums[k];
                // console.log(tempNum)
                let primeNum = true;
                for(let l = 2; l < tempNum; l++ ){
                    if(tempNum % l === 0){
                        primeNum = false;
                    }
                }
                if(primeNum === true){
                    answer++;
                }
            }
        }
    }
   
    
    return answer;
}