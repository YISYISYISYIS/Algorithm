function solution(numbers) {
    var answer = [];
    let tempArr = [];
    for(let i = 0; i < numbers.length; i++){
        for(let j = i+1; j < numbers.length; j++){
            tempArr.push(numbers[i]+numbers[j])
        }
    }
    let arrSet = new Set(tempArr);
    let result = [...arrSet];
    // console.log(result)
    answer = result.sort((a,b)=> a-b)
    return answer;
}