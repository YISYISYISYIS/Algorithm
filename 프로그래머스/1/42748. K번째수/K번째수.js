function solution(array, commands) {
    var answer = [];
    //i번째 에서 j번째까지 의 배열 잘라냄 slice, 단 인덱스가아니라 순서임!
    //오름차순 정렬 sort a-b
    //k번째 순서(인덱스아님)숫자 푸쉬로 밀어넣음
    
    let tempArr = [];
    for(let i = 0; i < commands.length; i++){
       let tempNum = array.slice((commands[i][0])-1,(commands[i][1])).sort((a,b)=>{
           return a-b;
        });
        tempArr.push(tempNum[commands[i][2]-1]);
    }
    answer = tempArr;
    return answer;
}