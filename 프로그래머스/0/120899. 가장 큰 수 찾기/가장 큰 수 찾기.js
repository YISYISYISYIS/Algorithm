function solution(array) {
    var answer = [];
    let maxNum = Math.max(...array);
    let maxIndex = array.indexOf(maxNum);
    
    answer = [maxNum,maxIndex];
    
    return answer;
}



// function solution(array) {
//     var answer = array[0];
//     let maxIndex = 0;
    
//     for(let i = 0; i< array.length; i++){
//         if(array[i] > answer){
//             answer = array[i];
//             maxIndex = i;
//         }
//     }
//     answer = [answer,maxIndex];
//     return answer;
// }