function solution(num_str) {
    var answer = 0;
    answer = num_str.split("").reduce((acc,num) =>{
        return acc + +num;
    },0)
    return answer;
}