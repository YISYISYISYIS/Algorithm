function solution(n) {
    var answer = 0;
    let tempNum = 1; // 팩토리얼을 계산할 임시 변수, 1로 시작 (0! = 1)
    let incValue = 1; // 팩토리얼을 계산하기 위해 사용하는 변수, 1부터 시작.
    
    while(tempNum <=n){ // tempNum(현재 팩토리얼 값)이 n 이하인 동안 반복.
        incValue++; // incValue를 1 증가. 이 값은 팩토리얼을 계산하는 데 사용.
        tempNum *=incValue; // 현재 incValue로 tempNum을 갱신. 즉, 팩토리얼을 계산.
    }
    answer = incValue - 1; // incValue에서 1을 빼서 answer에 할당.
    return answer;
}