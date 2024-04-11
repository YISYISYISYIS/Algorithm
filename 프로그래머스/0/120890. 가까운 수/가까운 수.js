function solution(array, n) {
    var answer = array[0];
    let tempNum = Math.abs(n - array[0]);
    
    for(let i = 1; i < array.length; i++){
        let tempArr = Math.abs(n - array[i]);
        
        if(tempNum > tempArr || (tempNum === tempArr && array[i] < answer)){
            answer = array[i];
            tempNum = tempArr;
        }
    }
    
    return answer;
}