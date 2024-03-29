function solution(money) {
    var answer = [];
    let americanoPrice = 5500;
    let americanoCount = Math.floor(money / americanoPrice);
    let americanoChange = money % americanoPrice;
    answer.push(americanoCount,americanoChange)
    return answer;
}