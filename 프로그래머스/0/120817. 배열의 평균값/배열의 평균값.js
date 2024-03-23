function solution(numbers) {
    var answer = 0;
    let temp = 0;
    for(let i = 0; i < numbers.length; i++){
        temp += numbers[i];
    }
    answer = temp/numbers.length;
    return answer;
}