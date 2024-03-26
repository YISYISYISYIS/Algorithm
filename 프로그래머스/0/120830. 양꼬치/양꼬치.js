function solution(n, k) {
    var answer = 0;
    let food = 12000;
    let drink = 2000;
    let freeDrink = Math.floor(n/10);
    let paymentDrink = k - freeDrink;
    
    answer = (food*n) + (paymentDrink*drink);
    
    return answer;
}