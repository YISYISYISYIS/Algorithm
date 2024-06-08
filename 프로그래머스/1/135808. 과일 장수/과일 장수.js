function solution(k, m, score) {
    var answer = 0;
    //k=최상품의 사과점수, m=한상자에 담는 사과갯수, score=사과들의 점수 배열
    //상자에 담긴사과중  가장낮은점수 x 한상자에 담는 사과갯수 = 사과한상자 가격
    //가능한 많은 사과를 팔고 얻을 수 있는 최대이익(상자단위판매)
    //사실이해안가는데 높은점수부터 낮은점수순으로 m숫자만큼 담고
    //담은 배열의 사과한상자가격 구하는공식써서 값누적
    //남은 score갯수가 m보다 작을경우 버림
    
    let scoreSort = score.sort((a,b) => b-a);
    let mArr =[];
    for(let i = 0; i < scoreSort.length; i++){
        mArr.push(scoreSort[i]);
        if(mArr.length === m){
            answer += Math.min(...mArr) * m;
            mArr = [];
        }
    }
    return answer;
}