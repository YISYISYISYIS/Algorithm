function Calculator(){
    this.calculatorResult = function(price){
        if(price >= 100000 && price < 300000){
            return  0.05;
        }else if(price >= 300000 && price < 500000){
            return  0.1;
        }else if(price >= 500000){
            return  0.2;
        }
        return  0;
    }
}

function solution(price) {
    let discountPrice = new Calculator;
    let discountTotal = discountPrice.calculatorResult(price)
    var answer = Math.floor(price - (price*discountTotal));
    return answer;
}




// function solution(price) {
//     var answer = 0;
//     let discount = 0;
    
//     if(price >= 100000 && price < 300000){
//         discount = 0.05;
//     }else if(price >= 300000 && price < 500000){
//         discount = 0.1;
//     }else if(price >= 500000){
//         discount = 0.2;
//     }
//     answer = Math.floor(price -(price*discount));
//     return answer;
// }


// function solution(price) {
//     var answer = 0;
//     if(price >= 100000 && price < 300000){
//         answer = Math.floor(price - (price*0.05));
//     }else if(price >= 300000 && price < 500000){
//         answer = Math.floor(price - (price*0.1));
//     }else if(price >= 500000){
//         answer = Math.floor(price - (price*0.2));
//     }
//     return answer;
// }