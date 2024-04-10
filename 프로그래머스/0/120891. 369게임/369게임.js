function solution(order) {
    var answer = 0;
    let arrNum = order.toString();
    let arrTemp = arrNum.split("");
    
    for(let i = 0; i < arrTemp.length; i++){
        if(arrTemp[i] === "3" || arrTemp[i] === "6" || arrTemp[i] === "9"){
            answer++;
        }
    }
    return answer;
}