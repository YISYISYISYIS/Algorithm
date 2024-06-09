function solution(answers) {
    var answer = [];
    //for반복문 조건 => answers.length만큼
    //가장 많은 문제를 맞춘사람을 리턴. 여기선 배열로 [1,2,3] 중 한명 혹은
    //같은갯수를 맞춘경우 오름차순으로 정렬해서 그 맞춘사람을 리턴
    //각 1,2,3수포자와 answers의 인덱스를 비교해서 일치시 
    //갯수 카운팅하는 변수를 따로 할당후 거기에 값을 누적.
    //조건이 끝나면 카운팅변수끼리 비교
    //추가: 찍는 방식의 패턴이 정답 배열의 길이보다 길거나 짧을 수 있는걸 적용해야됨
    
    let one = [1, 2, 3, 4, 5];
    let two = [2, 1, 2, 3, 2, 4, 2, 5];
    let three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let answer1 = 0;
    let answer2 = 0;
    let answer3 = 0;
    
    for(let i = 0; i < answers.length; i++){
        if(answers[i] === one[i % one.length]){
            answer1++;
        }
        if(answers[i] === two[i % two.length]){
            answer2++;
        }
        if(answers[i] === three[i % three.length]){
            answer3++;
        }
    }
    let total = Math.max(answer1,answer2,answer3)
    if(total === answer1){
        answer.push(1);
    }
    if(total === answer2){
        answer.push(2);
    }
    if(total === answer3){
        answer.push(3);
    }
 
    return answer;
}