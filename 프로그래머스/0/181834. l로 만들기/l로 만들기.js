function solution(myString) {
    var answer = '';
     for(let str of myString){
        if(str < 'l'){
            answer += 'l';
        }else{
            answer += str;
        }
    }
    return answer;
}