function solution(my_string, num1, num2) {
    var answer = '';
    let temp = [...my_string];
    
    [temp[num1],temp[num2]] = [temp[num2],temp[num1]];
    answer = temp.join("");
    return answer;
}




// function solution(my_string, num1, num2) {
//     var answer = '';
//     let indexCount = my_string.split("")
//     let temp = indexCount[num1];
//     indexCount[num1] = indexCount[num2];
//     indexCount[num2] = temp;
    
//     answer = indexCount.join("");
//     return answer;
// }