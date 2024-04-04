function solution(n, numlist) {
    var answer = [];
    answer = numlist.reduce(function(result,currentValue){
        if(currentValue % n === 0){
            result.push(currentValue);
        }
        return result;
    },[])
    return answer;
}



// function solution(n, numlist) {
//     var answer = [];
//     answer = numlist.filter(function(temp){
//         return temp % n === 0;
//     })
//     return answer;
// }



// function solution(n, numlist) {
//     var answer = [];
//     for(let i = 0; i < numlist.length; i++){
//         if(numlist[i] % n === 0){
//             answer.push(numlist[i]);
//         }
//     }
//     return answer;
// }