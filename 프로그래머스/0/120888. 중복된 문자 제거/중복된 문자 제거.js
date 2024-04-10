function solution(my_string) {
    var answer = '';
    let arrStr = my_string.split("");
    let tempStr = {}
    
    arrStr.forEach(function(str){
        if(!tempStr[str]){
            tempStr[str] = true;
            answer += str;
        }
    });
    return answer;
}






// function solution(my_string) {
//     var answer = '';
//     let arrStr = my_string.split("");
//     let tempArr = [];
    
//     for(let i = 0; i < arrStr.length; i++){
//         if(!tempArr.includes(arrStr[i])){
//             tempArr.push(arrStr[i]);
//         }
//     }
//     answer = tempArr.join("");
//     return answer;
// }