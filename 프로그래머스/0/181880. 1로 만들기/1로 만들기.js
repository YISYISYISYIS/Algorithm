function solution(num_list) {
    var answer = 0;
    for(let i = 0; i < num_list.length; i++){
        let tempNum = num_list[i];
        while(tempNum > 1){
            if(tempNum % 2 === 0){
                tempNum /= 2;
            }else{
                tempNum = (tempNum - 1) /2;
            }
            answer += 1;
        }
    }
    return answer;
}