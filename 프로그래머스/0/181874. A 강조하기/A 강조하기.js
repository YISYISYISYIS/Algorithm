function solution(myString) {
    var answer = '';
    let tempStr = "";
    tempStr = myString.toLowerCase();
    // console.log(tempStr)
    answer = tempStr.replaceAll("a","A")
    return answer;
}