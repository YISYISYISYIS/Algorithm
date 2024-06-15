function solution(X, Y) {
    var answer = '';
    //x와y에 공통으로 들어가는 숫자들을 모아서 가장 큰 정수를 만들어야함
    //x와 y에 공통된 값을 구하면서 짝에맞는 갯수도 구해야됨. 객체로 임시변수
    //new Set으로 각 요소  겹치는 숫자 제거
    //제거후 x와y의 교집합숫자만 모음
    //짝궁이 없을때 -1, 짝꿍이 전부 0일때는 0을 리턴
    //교집합숫자를 x와 y에서 일치할경우마다 객체에 프로퍼티와 값으로 저장
    //교집합으로 나눈 x,y에서 같은 프로퍼티값중 작은수(짝궁)를 모아서 하나의 객체로 만듬
    //통합 해서 프로퍼티값만큼을 찍어줘야함 근데모르겠음 // repeat로 키값만큼반복으로 해결
    //가장큰정수를 만드는거라서 sort로 localeCompare 이용문자열을 이용
    //안하고 어차피배열아니면 sort가안되서 spilt join으로 변환
    
    let newX = [...new Set([...X])];
    let newY = [...new Set([...Y])]
    // console.log(newX,newY)
    let xyNum = newX.filter((num)=>{
        return newY.includes(num);
    })
    // console.log(xyNum)
    let xNum = {};
    let yNum = {};
    let total = {};
    if(xyNum.length === 0){
        answer = "-1";
    }else if(xyNum == 0){
        answer = "0";
    }else{
        for(let i = 0; i < xyNum.length; i++){
            for(let j = 0; j < X.length; j++){
                if(xyNum[i] === X[j]){
                    if(!xNum[xyNum[i]]){
                        xNum[xyNum[i]] = 1;
                    }else{
                        xNum[xyNum[i]]++;
                    }
                }
            }
        }
        // console.log(xNum)
        for(let i = 0; i < xyNum.length; i++){
            for(let j = 0; j < Y.length; j++){
                if(xyNum[i] === Y[j]){
                    if(!yNum[xyNum[i]]){
                        yNum[xyNum[i]] = 1;
                    }else{
                        yNum[xyNum[i]]++;
                    }
                }
            }
        }
        // console.log(yNum)
        for(let value in xNum){
            total[value] = Math.min(xNum[value],yNum[value]);
           }
        // console.log(total)
        for(let value in total){
            answer += value.repeat(total[value]);
        }
        answer = answer.split("").sort((a,b)=>b-a).join("");
    }
    return answer;
}