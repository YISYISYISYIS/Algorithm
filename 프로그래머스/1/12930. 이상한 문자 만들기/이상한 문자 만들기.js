function solution(s) {
    var answer = '';
    //조건문으로 s[i]가 공백이면 그대로 더해줌
    //짝수만 toUpperCase로 바꿔서 더해줌
    //라고 생각했는데 예시 테스트에서 오류뜸
    //생각의 한계라서 AI찬스.
    //실제 문자인덱스를 추적해야됨. 변수를 할당해서 관리
    //그래서 빈문자열이면 더해주고 인덱스값을 초기화시킴
    let index = 0;
    for(let i = 0; i < s.length; i++){
        if(s[i] === " "){
            answer += " ";
            index = 0;
        }else{
            if(index % 2 === 0){
                answer += s[i].toUpperCase();
            }else{
                answer += s[i].toLowerCase();
            }
            index++;
        }
    }
    return answer;
}