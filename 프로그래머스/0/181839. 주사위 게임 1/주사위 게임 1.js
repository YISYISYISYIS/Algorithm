function solution(a, b) {
    var answer = 0;
    answer = a % 2 !== 0 && b % 2 !==0 ? (a*a) + (b*b) : 
             a % 2 !== 0 || b % 2 !==0 ? 2*(a+b) : 
             Math.abs(a-b)
        
    return answer;
}