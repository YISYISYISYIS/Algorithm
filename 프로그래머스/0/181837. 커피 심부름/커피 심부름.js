function solution(order) {
    var answer = 0;
    let americano = 4500;
    let cafelatte = 5000;
    
    for(let i = 0; i < order.length; i++){
        if(order[i].includes("americano")){
            answer += americano;
        }else if(order[i].includes("cafelatte")){
            answer += cafelatte;
        }else {
            answer += americano;
        }
    }
    return answer;
}