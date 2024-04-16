function solution(numbers) {
    var answer = 0;
    let strNum = {
        one : 1,
        two : 2,
        three : 3,
        four : 4,
        five : 5,
        six : 6,
        seven : 7,
        eight : 8,
        nine : 9,
        zero : 0
    }
    let result = "";
    let tempNum = ""
    for(let i = 0; i < numbers.length; i++){
        tempNum += numbers[i];
        if(strNum[tempNum] !== undefined){
            result += strNum[tempNum];
            tempNum = "";
        }
    }
    answer = +result;
    return answer;
}