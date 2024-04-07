function solution(box, n) {
    var answer = 0;
    
    answer = box.reduce(function(accValue,curValue){
       return accValue * Math.floor(curValue/n);
    },1)
    return answer;
}




// function solution(box, n) {
//     var answer = 1;
    
//     for(let diceNumber of box){
//        answer *= Math.floor(diceNumber/n);
//     }
//     return answer;
// }