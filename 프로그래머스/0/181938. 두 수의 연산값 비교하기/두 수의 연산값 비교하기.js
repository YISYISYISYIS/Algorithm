function solution(a, b) {
    var answer = 0;
    let plus = +(a.toString() + b.toString())
    let total = 2*a*b
    // console.log(plus)
    answer = plus > total ?  plus : total;
    return answer;
}