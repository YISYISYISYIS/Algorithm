function solution(my_string, s, e) {
    var answer = '';
    let tempStr = my_string.split("");
    
    let reverseStr = tempStr.slice(s,e+1).reverse()
    tempStr.splice(s,e-s+1,...reverseStr)
    answer = tempStr.join("")
    return answer;
}