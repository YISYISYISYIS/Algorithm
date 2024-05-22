function solution(n, m) {
    var answer = [];
    //최대공약수 두수를 각각나눴을때 공통된 가장큰값
    //최소공배수 두수를  각각 곱했을때 공통된 가장작은값
    //두수의 최소공배수를 구하는 방법은 두수를 곱한후 최대공약수로 나누면 됨.
    
    //최대공약수를 구하기.
    //각숫자 나머지값이 0인 숫자들을 배열에 모아서
    //중첩반복문으로 일치하는숫자 찾으면 값 리턴하고 종료
    //outerLoop까먹고 있던 중첩반복문 종료하는 법
    const tempArr1 = [];
    const tempArr2 = [];
    for(let i = 1; i <= n; i++){
        if(n % i === 0){
            tempArr1.push(i);
        }
    }
    for(let i = 1; i <= m; i++){
        if(m % i === 0){
            tempArr2.push(i);
        }
    }
    tempArr1.reverse();
    tempArr2.reverse();

    const maxLength = Math.max(tempArr1.length, tempArr2.length)
    let maxNum = 0;
    
    outerLoop: for(let i = 0; i < maxLength; i++){
      for(let j = 0; j < maxLength; j++){
          if(tempArr1[i] === tempArr2[j]){
             maxNum = tempArr1[i];
             break outerLoop;
          }
      }
    }
    let maxArr = (n*m)/maxNum;
    answer.push(maxNum, maxArr)
    return answer;
}