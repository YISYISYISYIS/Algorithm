function solution(myString) {
    var answer = [];
    let deleteX = myString.split("x");
    let tempArr = deleteX.filter((arr)=>{
        return arr !== "";
    })
    
    answer = tempArr.sort()
    return answer;
}