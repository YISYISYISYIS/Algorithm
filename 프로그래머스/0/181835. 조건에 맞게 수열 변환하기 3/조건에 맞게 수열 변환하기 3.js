function solution(arr, k) {
    var answer = [];
    if(k % 2 === 0){
        arr.forEach((num)=>{
            answer.push(num+k);
        })
    }else{
        arr.forEach((num)=>{
            answer.push(num*k)
        })
    }
    return answer;
}