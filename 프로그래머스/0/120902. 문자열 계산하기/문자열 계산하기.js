function solution(my_string) {
    var answer = 0;
    let tempNum = my_string.split(" ");
    let saveValue = Number(tempNum[0]);
    
    for(let i = 1; i < tempNum.length; i+=2){
        let currIndex = Number(tempNum[i+1]);
        if(tempNum[i] === "+"){
            saveValue += currIndex;
        }else{
            saveValue -= currIndex;
        }
    }
    answer = saveValue;
    return answer;
}




// function solution(my_string) {
//     var answer = 0;
//     let tempNum = my_string.split(" ");
//     let indexZero = Number(tempNum[0]);
//     let indexTwo = Number(tempNum[2]);
    
//     if(tempNum[1] === "+"){
//         answer = indexZero + indexTwo;
//     }else{
//         answer = indexZero - indexTwo;
//     }
//     return answer;
// }