function solution(seoul) {
    var answer = '';
    //반복문 돌면서 "김서방" 위치의 인덱스 값을 반환
    for(let i = 0; i < seoul.length; i++){
        if(seoul[i] === "Kim"){
            answer = `김서방은 ${i}에 있다`
        }
    }
    return answer;
}