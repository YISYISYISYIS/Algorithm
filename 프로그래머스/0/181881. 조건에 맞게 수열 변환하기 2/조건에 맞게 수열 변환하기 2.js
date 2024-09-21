function solution(arr) {
    var answer = 0;
    
    while(true){
        let tempArr = [];
           for(let i = 0; i < arr.length; i++){
               if(arr[i] >= 50 && arr[i] % 2 === 0){
                   tempArr.push(arr[i] / 2);
               }else if(arr[i] < 50 && arr[i] % 2 !== 0){
                   tempArr.push((arr[i]*2)+1);
               }else{
                   tempArr.push(arr[i]);
               }
           }
            // 배열이 같으면 반복 횟수 반환
            if (arr.length === tempArr.length && arr.every((value, index) => value === tempArr[index])) {
            return answer; 
            }
        
            arr = tempArr;
            answer += 1;
        }
    return answer;
}