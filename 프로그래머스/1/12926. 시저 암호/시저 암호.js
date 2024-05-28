function solution(s, n) {
    var answer = '';
    //문자를 확인하는 메서드 x.charCodeAt() 
    //주어진 유니코드 값을 문자열로 변환 하는 메서드 String.fromCharCode()
    //소문자 'a'~'z'유니코드는 97 ~ 122
    //대문자 'A'~'z'유니코드는 65 ~ 90  띄어쓰기 32
    //각 문자열을 순회하며 대문자 소문자 구별, 공백일 경우는 그대로 공백을 리턴
    //n만큼 더한 유니코드값을 반환
    //만약 각숫자끝유니코드보다 반환한 값이 클경우 유니코드숫자-반환값후
    //각 반대로 소문자대문자  처음숫자에 더해주고 값반환
    // console.log(s.charCodeAt(0))
    // console.log(String.fromCharCode(122))
    // console.log(s.charCodeAt(0)+n)
    for (let i = 0; i < s.length; i++){
        if(s.charCodeAt(i) >= 97 && s.charCodeAt(i) <= 122){
            if(s.charCodeAt(i) + n > 122){
                answer += String.fromCharCode((s.charCodeAt(i) + n) - 26);
            }else{
                answer += String.fromCharCode(s.charCodeAt(i)+  n);
            }
            
        }else if(s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 90){
            if(s.charCodeAt(i) + n > 90){
                answer += String.fromCharCode((s.charCodeAt(i) + n) - 26)
            }else{
                answer += String.fromCharCode(s.charCodeAt(i) + n);
            }
            
        }else if(s.charCodeAt(i) === 32){
            answer += s[i];
        }
    }
    return answer;
}