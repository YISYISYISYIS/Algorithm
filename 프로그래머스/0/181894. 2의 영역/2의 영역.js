function solution(arr) {
    var answer = [];
    let firstArr = -1;
    let secondArr = -1;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 2) {
            if (firstArr === -1) {
                firstArr = i; 
            } 
            secondArr = i; 
        }
    }
    if(firstArr === -1){
        answer.push(-1)
    }else if(firstArr !== -1 && secondArr === -1){
        answer.push(arr[firstArr])
    }else if(firstArr !== -1 && secondArr !== -1){
        answer = arr.slice(firstArr,secondArr+1)
    }
    
    return answer;
}