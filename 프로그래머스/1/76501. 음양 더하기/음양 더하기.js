function solution(absolutes, signs) {
    var answer = 0;
    //두 매개변수값들의 배열 길이는 같음
    //반목분으로 돌면서 조건문으로 signs가 false/true일때
    //absolutes에 +-를 붙여주고 그값을 answer에 누적시켜주면 될듯
    for(let i = 0; i < absolutes.length; i++){
        if(signs[i] === false){
            absolutes[i] = absolutes[i];
            answer += absolutes[i] * -1;
        }else{
            answer += absolutes[i];
        }
    }
    return answer;
}