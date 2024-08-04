function solution(my_string, indices) {
    var answer = '';
    let tempStr = my_string.split("");
    for(let i = 0; i < indices.length; i++){
        tempStr[indices[i]] = "";
    }
    answer = tempStr.join("")
   
    return answer;
}