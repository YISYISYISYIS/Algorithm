function solution(n, m, section) {
    var answer = 0;
    // section배열 첫번째는 카운트+해줌. 
    //그리고 숫자m길이 인덱스값인 m-1을 첫 인덱스숫자와 더해줌 
    //그다음 배열인덱스값이 tempNum보다 작거나 같으면 continue
    //배열인덱스 값이 크면 카운트+해줌. 그리고 다시 m-1을 지금 인덱스에 더해줌.
    //그다음 배열 인덱스 값을 다시 비교후 작거나 같으면 continue, 크면 카운트+ 하고 m-1더해줌 반복
    let tempNum = 0;
    for(let i = 0; i < section.length; i++){
        if(section[i] > tempNum){
            answer++;
            tempNum = section[i]+ (m-1);
        }
    }
    return answer;
}