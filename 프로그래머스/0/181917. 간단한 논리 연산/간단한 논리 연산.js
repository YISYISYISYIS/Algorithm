function solution(x1, x2, x3, x4) {
    var answer = true;
    //∨ => 적어도 하나 이상의 명제가 참인가?(or) ∧=> 주어진 모든 명제가 참인가?(and)
    //(x1 ∨ x2) ∧ (x3 ∨ x4)
    answer = (x1 || x2) && (x3 || x4)
    
    return answer;
}