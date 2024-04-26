function solution(n)
{
    var answer = 0;
    //for문으로 돌면서 누적값을 저장할 변수에 차곡자곡 넣어주면 될거같다
    //단 입력값이 숫자라서 toString를 써서 문자열로 바꾼후 
    //for문에서 값을 넣을때는 다시 숫자형으로 바꿔주고 계산
    let tempNum = n.toString()
    for(let i = 0; i < tempNum.length; i++){
        answer += Number(tempNum[i]);
    }
    return answer;
}