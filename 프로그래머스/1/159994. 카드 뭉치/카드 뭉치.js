function solution(cards1, cards2, goal) {
    var answer = 'Yes';
    //배열goal 안에 요소들 순서대로 cards1과cards2의 배열들을 조합해만들수있는지?
    //원하는 단어로 건너띌수 x, 재사용불가,순서대로 한장씩사용가능,카드뭉치순서 바꿀수 x
    //goal 첫번째 인덱스를 card1,2에 첫번째 인덱스에 같은게 있는지 확인
    //없으면 바로 false리턴
    //있으면 있는 카드뭉치쪽 인덱스를 +1시키고 goal인덱스도 다음요소인덱스로 넘어감
    //다시 goal두번째 인덱스를 card1,2인덱스랑 비교 없으면 false, 있으면 있는 카드뭉치 인덱스+1
    let tempCard1 = 0;
    let tempCard2 = 0;
    for(let i = 0; i < goal.length; i++){
        if(goal[i] === cards1[tempCard1]){
            tempCard1++;
        }else if(goal[i] === cards2[tempCard2]){
            tempCard2++;
        }else {
            answer = "No"
        }
    }
    return answer;
}