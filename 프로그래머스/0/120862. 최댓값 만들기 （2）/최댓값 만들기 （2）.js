function solution(numbers) {
    var answer = 0;
    let emptyArr =[];
    let maxValue = 0;
    let smallValue = 0;
    
    emptyArr = numbers.sort(function(a,b){
        return a-b;
    });
    smallValue = emptyArr[0] * emptyArr[1];
    maxValue = emptyArr[numbers.length-1] * emptyArr[numbers.length-2];
    answer = Math.max(smallValue,maxValue);
    
    return answer;
}





// function solution(numbers) {
//     var answer = 0;
//     let maxValue = 0;
//     let currentValue = 0;
    
//     for(let i = 0; i < numbers.length; i++){
//         for(let j = 0; j < i; j++){
//             currentValue = numbers[i] * numbers[j];
//             if(currentValue > maxValue){
//                 maxValue = currentValue;
//             }
//         }
//     }
//     answer = maxValue;
//     return answer;
// }