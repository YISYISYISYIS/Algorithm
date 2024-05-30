function solution(strings, n) {
    var answer = [];
    //이거 강의에서편법본거 기억남
    //포문돌면서 n번인덱스 위치문자를 그문자앞에 붙여서 sort비교
    //순서정렬후 앞쪽붙였던 문자 0번인덱스 삭제
    let tempStr = [];
    for(let i = 0; i < strings.length; i++){
        let tempArr = "";
        tempArr = strings[i][n] + strings[i];
        tempStr.push(tempArr)
    }
    let tempArr = tempStr.sort();
    
    for(let i = 0; i < strings.length; i++){
        answer.push(tempArr[i].slice(1))   
    }
    return answer;
}