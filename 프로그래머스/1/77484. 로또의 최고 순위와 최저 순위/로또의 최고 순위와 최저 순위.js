function solution(lottos, win_nums) {
    var answer = [];
    //lottos => 구매한 로또 , win_nums => 1등당첨번호
    //lottos에 0은 알아볼수없는 숫자 어떤수도 가능함. 순서상관없이 일치하면 맞힌걸로간주
    //당첨가능한 최고순위와 최저순위를 차례대로 배열담아서 리턴
    //6=>1등 5=>2등 4=>3등 3=>4등 2=>5등 그외=>6등
    
    //내림차순정렬후 배열길이끝수가 0이있고 없고로 분기한번나눔
    //0이없는 경우는 최고순위 최저순위 의미없음 숫자가 바뀌지않으니까 리턴값은 최고최저 같음. 맞는부분 바로 순위리턴
    //0이있는 경우 최고최저 나눔
    //일단 lottos가 0이 아닌경우 win_nums비교후 같으면 min값에 저장
    //0이면 바로 0을 카운트하는 변수++; 따로 win_nums비교후 계산할거없이 0이면 그냥 당첨번호라고 가정.
    //min값+제로값 === 최고당첨가능순위
    
    let tempWin = win_nums;
    let tempLotto = lottos;
    tempLotto.sort((a,b)=>b-a);
    let maxCount = 0;
    let minCount = 0;
    let zeroCount = 0;
    
    if(tempLotto[tempLotto.length - 1] !== 0){
        for(let i = 0; i < tempLotto.length; i++){
            for(let j = 0; j < tempLotto.length; j++){
                if(tempLotto[i] === tempWin[j]){
                    maxCount++;
                    minCount++;
                }
            }
        }
        
    }else if (tempLotto[tempLotto.length - 1] === 0) {
       for(let i = 0; i < tempLotto.length; i++){
           if(tempLotto[i] !== 0){
               for(let j = 0; j < tempWin.length; j++){
                   if(tempLotto[i] === tempWin[j]){
                       minCount++;
                   }
               }
           }else{
               zeroCount++;
           }
       }
        maxCount = minCount+zeroCount;
    }
    // console.log(tempWin)
    if(maxCount === 6){
            answer.push(1);
        }else if(maxCount === 5){
            answer.push(2);
        }else if(maxCount === 4){
            answer.push(3);
        }else if(maxCount === 3){
            answer.push(4);
        }else if(maxCount ===2){
            answer.push(5);
        }else if(maxCount < 2){
            answer.push(6);
        }
        if(minCount === 6){
            answer.push(1);
        }else if(minCount === 5){
            answer.push(2);
        }else if(minCount === 4){
            answer.push(3);
        }else if(minCount === 3){
            answer.push(4);
        }else if(minCount ===2){
            answer.push(5);
        }else if(minCount < 2){
            answer.push(6);
        }
 
    return answer;
}



