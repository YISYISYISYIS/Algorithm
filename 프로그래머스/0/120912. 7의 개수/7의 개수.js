function solution(array) {
    var answer = 0;
    
    array.toString().split("").filter(function(tempArr){
        if(tempArr === "7"){
            answer++;
        }
    });
    return answer;
}




// function solution(array) {
//     var answer = 0;
    
//     array.forEach(function(tempArr){
//         tempArr.toString().split("").forEach(function(tempNum){
//             if(tempNum === "7"){
//                 answer++;
//             }
//         })
//     });
//     return answer;
// }





// function solution(array) {
//     var answer = 0;
//     let tempArr = array.join("").split("");
    
//     for(let tempNum of tempArr){
//         if(tempNum === "7"){
//             answer++;
//         }
//     }
//     return answer;
// }