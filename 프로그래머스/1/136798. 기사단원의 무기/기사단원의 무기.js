function solution(number, limit, power) {
    var answer = 0;
    //단원수 number, 제한수치 무기공격력 limit, 그 초과한 기사가 사용할 무기공격력 power
    //무기공격력1당 무게1kg. 무기를 모두만들깨 필요한 철무게를 return.
    //자기 번호의 약수개의 공격력, 이 공격력(각수의 약수갯수)이 > limit 보다 크면 power를 대신 반환
    //총 공격력= 총무게를 answer리턴
    //약수 = 어떤수를 나누고 나머지가 0인수
    //-----추가부분-----
    //시간초과로인해 제곱근을 이용하여 풀이
    
    // let tempNumber = [];
    // for(let i = 1; i <= number; i++){
    //     tempNumber.push(i);
    // }
    // for(let i = 0; i < tempNumber.length; i++){
    //     let tempIndex = 0;
    //    for(let j = 1; j <= tempNumber[i]; j++){
    //        if(tempNumber[i] % j === 0){
    //            tempIndex++;
    //        }
    //    }
    
    for (let i = 1; i <= number; i++) { //tempNumber배열이용x 1~number까지의 숫자순회
        //각 숫자 i에 대해 약수의 개수를 구하기
        let tempIndex = 0;
        for (let j = 1; j <= Math.sqrt(i); j++) { //약수 개수를 구하는 부분에서 제곱근까지만 검사
            //제곱근까지만 순회하는 이유=> 약수는 항상 대칭적으로 존재.
            //ex)i=16의 약수는 1, 2, 4, 8, 16이며, 이 중 1, 2, 4, 8은 제곱근 4 이하에 있습니다.
            if (i % j === 0) { //i를 j로 나눴을 때 나머지가 0이면, 즉 j가 i의 약수이면 실행
                tempIndex++;
                if (j !== i / j) { //j가 i의 제곱근이 아닌 경우에 실행
                    //ex) i=16의 약수 4는 i/4=4이므로, 이 경우에는 약수의 개수를 1개만 증가
                    //하지만 j=4인 경우, i/j=4이므로 약수의 개수를 2개 증가
                    tempIndex++;
                }
            }
        }
        if(tempIndex > limit){
            answer += power;
        }else{
            answer += tempIndex;
        }
    }
    
    return answer;
}