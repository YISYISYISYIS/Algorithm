function solution(k, score) {
    var answer = [];
    //진행된 날짜 = score.length
    //k수만큼 배열을 저장을 하는데 score가 k만큼 들어오고 k.length를 넘어가면
    //이미 k배열안에 들어와있는 score와 비교후 최소점수를 삭제. 그리고 
    //그k배열 안에 수중 최소 숫자를 리턴해서 answer에 push로 넣어줌
    let tempArr = [];
    for(let i = 0; i < score.length; i++){
        if(tempArr.length < k){
            tempArr.push(score[i]);
            answer.push(Math.min(...tempArr));
        }else{
            tempArr = [...tempArr,score[i]];
            let minNum = Math.min(...tempArr)
            let newArr = tempArr.indexOf(minNum);
            if(newArr !== -1){
                tempArr.splice(newArr,1);
            }
            answer.push(Math.min(...tempArr));
            // console.log(tempArr)
        }
    }
    return answer;
}