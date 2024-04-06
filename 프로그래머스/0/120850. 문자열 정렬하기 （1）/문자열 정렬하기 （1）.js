function solution(my_string) {
    var answer = [];
    answer = my_string.split("");
    answer = answer.filter(function(num){
        return !isNaN(num);
    });
    answer = answer.map(function(num1){
        return Number(num1);
    })
    answer.sort(function(a,b){
        return a-b;
    });
    return answer;
}




// function solution(my_string) {
//     var answer = [];
//     for(let i = 0; i < my_string.length; i++){
//         if(!isNaN(my_string[i])){
//             answer.push(Number(my_string[i]));
//         }
//     }
//     answer.sort(function(a,b){
//         return a-b;
//     });
//     return answer;
// }