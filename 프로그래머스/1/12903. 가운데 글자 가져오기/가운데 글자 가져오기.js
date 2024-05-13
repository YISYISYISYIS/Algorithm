function solution(s) {
    var answer = '';
    //문자열길이 /2를해서 나온 값을 s의 인덱스로 찾아서 반환
    let temp1 = 0;
    let temp2 = 0;
    if(s.length % 2 !== 0){
        temp1 = Math.floor(s.length/2);
        answer = s[temp1];
    }else{
        temp2 = s.length/2;
        answer = s[temp2-1]+s[temp2];
    };
    
    
    return answer;
}