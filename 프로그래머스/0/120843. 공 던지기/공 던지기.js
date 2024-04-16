function solution(numbers, k) {
    var answer = 0;
    let tempNum = 0;
    
    for(let i = 0; i < k-1; i++){
        tempNum = (tempNum +2) % numbers.length;
    }
    return numbers[tempNum];
}