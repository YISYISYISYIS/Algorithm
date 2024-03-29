function solution(my_string) {
    var answer = '';
    let removeStr = ["a","e","i","o","u"];
    
    for(let i = 0; i < my_string.length; i++){
        if(!removeStr.includes(my_string[i])){
            answer += my_string[i];
        }
    }
    return answer;
}