function solution(my_string) {
    var answer = '';
    let smallStr = my_string.toLowerCase();
    let stringArr = smallStr.split("").sort();
    answer = stringArr.join("");
    return answer;
}