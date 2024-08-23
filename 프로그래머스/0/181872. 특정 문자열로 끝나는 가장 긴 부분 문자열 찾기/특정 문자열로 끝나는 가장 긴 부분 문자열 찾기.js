function solution(myString, pat) {
    var answer = '';
    let lastIndex = myString.lastIndexOf(pat);
    let tempStr = myString.substring(0,lastIndex);
    answer = tempStr+pat;
    return answer;
}