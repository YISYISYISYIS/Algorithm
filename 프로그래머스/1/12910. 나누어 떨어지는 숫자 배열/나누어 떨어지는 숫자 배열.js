function solution(arr, divisor) {
    var answer = [];
    //반복문으로 arr돌면서 인덱스 하나하나 div로 나누고
    //%나머지가 0인경우만 밖에 임시배열안에 push로 누적시키면서
    //누적시킨임시배열이 length가 0이면 -1
    //그외에는 sort a-b로 오름차순으로 정렬
    
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % divisor === 0){
            answer.push(arr[i]);
        }
    }
    if(answer.length !== 0){
        answer.sort((a,b)=>{
            return a - b;
        })
    }else{
        answer.push(-1);
    }
    return answer;
}