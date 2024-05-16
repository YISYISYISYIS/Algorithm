function solution(left, right) {
    var answer = 0;
    //일단 left에서 right까지의 숫자들을 반복문으로 순회하면서 배열로 담음
    //나머지값이 0인경우의 갯수를 체크후
    //짝수면 +,홀수면 -해서 넣어줌
    //배열의 길이가 짝수,홀수 일때 각각 더하고 빼줌
    let tempArr = [];
    for(let i = left; i <= right; i++){
        tempArr.push(i);
    }
    for(let i = 0; i < tempArr.length; i++){
        let tempNum = [];
        for(let j = 1; j <= tempArr[i]; j++){
            if(tempArr[i] % j === 0){
                tempNum.push(j)
            }
        }
        if(tempNum.length % 2 === 0){
            answer += tempArr[i];
        }else{
            answer += -tempArr[i];
        }
        
    }
    return answer;
}