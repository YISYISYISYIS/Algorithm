function solution(n) {
    var answer = 0;
    //숫자=>문자열=>배열로 바꾸고
    //sort b-a로 내림차순 정렬 
    //join으로 붙이기!
    let tempNum = String(n);
    tempNum = tempNum.split("").sort((a,b)=>{
        return b-a;
    });
    answer = Number(tempNum.join(""));
    return answer;
}