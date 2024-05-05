function solution(a, b) {
    var answer = 0;
    //일단 숫자를 오름차순으로 정렬. 왜 반복문 돌릴때 한쪽방향으로 커지게끔.
    //그뒤에 반복문에 시작점을 작은수의 인덱스. 끝나는부분 큰수의 인덱스로 설정
    //변수에 값을 더하면서 누적
    tempArr = [a,b];
    tempArr.sort((a,b)=>{
        return a - b;
    });
    for(let i = tempArr[0]; i <= tempArr[1]; i++){
        answer += i;
    }
    return answer;
}