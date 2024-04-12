function solution(s) {
    var answer = 0;
    let tempArr = s.split(" ");
    let tempNum = []
    
    tempArr.forEach(function(value){
        if(value === "Z"){
            tempNum.pop();
        }else{
            tempNum.push(Number(value));
        }
    });
    answer = tempNum.reduce(function(saveNum,currNum){
        return saveNum+currNum;
    },0)
    return answer;
}




// function solution(s) {
//     var answer = 0;
//     let tempArr = s.split(" ");
//     let tempTotal = 0;
    
//     for(let i = 0; i < tempArr.length; i++){
//         if(!isNaN(tempArr[i])){
//             tempTotal += +tempArr[i];
//         }else {
//             tempTotal -= +tempArr[i-1];
//         }
//     }
//     answer = tempTotal;
//     return answer;
// }