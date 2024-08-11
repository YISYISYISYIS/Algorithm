function solution(n_str) {
    var answer = '';
    let tempZero = false;
    for(let i = 0; i < n_str.length; i++){
        if(n_str[i] !== "0"){
            tempZero = true;
        }
        if(tempZero){
            answer += n_str[i];
        }
    }
    return answer;
}