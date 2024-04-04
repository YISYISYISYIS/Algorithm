function solution(my_string) {
    var answer = 0;
    let temp = my_string.split("");
    for(let i = 0; i < temp.length; i++){
        if(!isNaN(temp[i])){
            answer += Number(temp[i]);
        }
    }
    return answer;
}