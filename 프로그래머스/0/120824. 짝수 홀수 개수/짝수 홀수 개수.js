function solution(num_list) {
    var answer = [];
    let evenNumber = num_list.filter(function(num){
        return num % 2 === 0;
    });
    let oddNumber = num_list.filter(function(num){
        return num % 2 !== 0;
    });
    answer = [evenNumber.length,oddNumber.length];
    return answer;
}

// function solution(num_list) {
//     var answer = [0,0];
//     for(let i = 0; i < num_list.length; i++){
//         if(num_list[i] % 2 === 0){
//             answer[0] += 1;
//         }else{
//             answer[1] += 1;
//         }
//     }
//     return answer;
// }