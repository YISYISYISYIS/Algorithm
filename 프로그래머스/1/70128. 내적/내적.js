function solution(a, b) {
    var answer = 0;
    //내적이란 각각의 같은 위치값을 곱한후 그값들을 전부 더한값
    //각각의 인덱스 곱한 값을 변수에 누적시키면 될듯
    for(let i = 0; i < a.length; i++){
        answer += a[i]*b[i];
    }
    return answer;
}