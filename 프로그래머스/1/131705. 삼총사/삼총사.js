function solution(number) {
    var answer = 0;
    //x+y+z === 0 인 경우찾아서 결과값에 +1
    //배열요소의 인덱스가 값이 없을때까지 조건
    //임시변수 j,k는 i,j가 값이 증가될때 같이 증가되야하므로 변수+1
    let i = 0;
    while(number[i] !== undefined){
        let j = i+1;
        while(number[j] !== undefined){
            let k = j+1;
            while(number[k] !== undefined){
                if(number[i]+number[j]+number[k] === 0){
                    answer++;
                }
                k++;
            }
            j++;
        }
        i++;
    }
    return answer;
}