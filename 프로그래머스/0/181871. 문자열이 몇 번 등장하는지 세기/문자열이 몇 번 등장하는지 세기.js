function solution(myString, pat) {
    var answer = 0;
    let patLength = pat.length;
    for (let i = 0; i <= myString.length; i++){
        if(myString.slice(i, i+patLength) === pat){
            answer += 1;
        }
    }
    return answer;
}