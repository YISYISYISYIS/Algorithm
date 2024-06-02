function solution(s) {
    var answer = [];
    //순회를 하면서 각인덱스의 문자를 저장
    //순회하고 있는문자 반대방향으로 가는 중첩반복문 
    //문자를 반환해서 임시변수에 담고 나온문자 인덱스위치로 값을 비교해서 값을 리턴까지 생각
    //다만 인덱스위치를 어떻게 접근해야할지 감을못찾아서 AI
    //변수에 만족하는 조건이 없을때는 -1을 미리선언
    //j조건문 만드는게 가장핵심인듯 거꾸로 순회하면서 i-1만큼 j값을 선언해서 바로 앞변수를 지칭
    //같을경우 안덱스위치생각할거없이 변수i,j값으로 빼주면 떨어진만큼 위치가 나옴.
    
    
    for(let i = 0; i < s.length; i++){
        let tempNum = -1;
        for(let j = i-1; j >= 0; j--){
            if(s[i] === s[j]){
                tempNum = i - j;
                break;
            }
        }
        answer.push(tempNum)
    }
    return answer;
}