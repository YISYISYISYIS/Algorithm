function solution(a, d, included) {
    var answer = 0;
    //등차수열 = 인접한 수의 차이가 같은 수의 나열
    //5,7,9,11.. => "공"통"차"이 :2 , 첫번째항 5 "초항"
    //초항 =>a , 공차=>d
    for(let i = 0; i < included.length; i++){
        if(included[i] === true){
            answer += a + (i * d);
        }
    }
    return answer;
}