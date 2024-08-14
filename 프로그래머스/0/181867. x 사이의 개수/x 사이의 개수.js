function solution(myString) {
    var answer = [];
    let tempStr = myString.split("x");
    answer = tempStr.map((str)=>{
        return str.length
    })
  
    return answer;
}