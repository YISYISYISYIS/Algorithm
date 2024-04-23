function solution(absolutes, signs) {
    var answer = 123456789;
    //이게 true가 양수, false가 음수인가봄? 문제이해못함.
    //둘다배열,길이 같고
    //signs요소값 true,false를 조건문으로 확인후 absolutes에서 같은 인덱스를 
    //-해주던지 나두던지하면될듯? 근데 -를 그냥붙이면 되나?
    //머리가 복잡함 그냥 쓰면서 하기로
    let tempNum = 0;
    for(let i = 0; i < signs.length; i++){
        if(signs[i] === false){
            absolutes[i] = -absolutes[i];
            tempNum += absolutes[i]
        }else if(signs[i] === true){
            tempNum += absolutes[i]
        }
    }
    answer = tempNum;
    return answer;
}