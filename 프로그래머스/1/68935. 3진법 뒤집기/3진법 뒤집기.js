function solution(n) {
    var answer = 0;
    //3진법 변환하기 =>주어진 숫자를 3으로 나누고, 나머지를 기록
    //0이 될 때까지 반복하고, 기록된 나머지를 순서대로넣어주면 자동으로 역순으로 들어감.
    //나누고 나머지값을 변수에 누적시키면서 나머지가 0이 아니면 계속 나누기 진행
    //3진법에서  10진법=> 각자릿수의 오른쪽에서부터 왼쪽으로 3의0제곱부터 해서 곱함
    //그리고 그결과를 더함
    let tempNum = 0;
    let tempArr = [];
    let tempPara = n;
    while(tempPara !== 0){
        tempArr.push(tempPara % 3);
        tempPara = Math.floor(tempPara / 3)
    }
    tempArr.reverse();
    for(let i = 0; i < tempArr.length; i++){
        tempNum += (3**i)*tempArr[i];
    }
    answer = tempNum;
    return answer;
    }