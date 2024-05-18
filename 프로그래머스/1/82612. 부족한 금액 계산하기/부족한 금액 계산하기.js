function solution(price, money, count) {
    var answer = -1;
    //가격이 n배씩 count횟수만큼 증가한값을 money에서 뺐을때 
    //양수거나 0이면 0을 리턴, 음수일때는 Math.abs로 절대값 변환후 반환
    let tempPrice = 0;
    for(let i = 1; i <= count; i++){
        tempPrice += price * i; 
    }
    if(money - tempPrice === 0 || money - tempPrice > 0){
        answer = 0;
    }else if(money - tempPrice < 0){
        answer = Math.abs(tempPrice - money);
    }
    return answer;
}