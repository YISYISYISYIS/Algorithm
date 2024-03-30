function solution(my_string) {
    var answer = '';
    answer = my_string.split("");
    answer = answer.reverse();
    answer = answer.join("");
    return answer;
}