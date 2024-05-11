function solution(numbers) {
    var answer = 0;
    //0부터 9까지 10번반복중에
    //i값이 numbers안에 없다면
    //배열에서 값이 있는지 없는지 확인하는 메서드 includes 사용해서
    //false면 answer에 누적해줌
    for(let i = 0; i <= 9; i++){
        if(numbers.includes(i) === false){
            answer += i;
        }
    }
    return answer;
}