function solution(numbers, direction) {
    var answer = [];
    
    if(direction === "right"){
        numbers.splice(0,0,numbers.splice(numbers.length-1,1)[0]) ;
        answer = numbers;
    }else{
        numbers.splice(numbers.length,0,numbers.splice(0,1)[0]); 
        answer = numbers;
    }
    return answer;
}




// function solution(numbers, direction) {
//     var answer = [];
    
//     if(direction === "right"){
//         answer = [numbers[numbers.length-1]].concat(numbers.slice(0,-1));
//     }else{
//         answer = numbers.slice(1).concat(numbers[0]);
//     }
//     return answer;
// }





// function solution(numbers, direction) {
//     var answer = [];
    
//     if(direction === "right"){
//         let arrRight = numbers.pop();
//         numbers.unshift(arrRight);
//         answer = numbers;
//     }else{
//         let arrLeft = numbers.shift();
//         numbers.push(arrLeft);
//         answer = numbers;
//     }
//     return answer;
// }