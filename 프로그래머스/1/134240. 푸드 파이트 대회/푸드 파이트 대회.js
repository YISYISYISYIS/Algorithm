function solution(food) {
    var answer = '';
    //1번인덱스부터 3번인덱스를 2나누고 Math.floor로 소숫점을 버림
    //각 인덱스번호를 나눈 값만큼 횟수로 추가
    //나눈값이 1이 안되면 추가x
    //0과 나온 결과값을 split sort join으로 뒤집고 더해줌
    let tempArr = "";
    for(let i = 1; i < food.length; i++){
        let tempNum = Math.floor(food[i]/2);
        if(tempNum >= 1){
            for(let j = 0 ; j < tempNum; j++){
                tempArr += i;
            }
        }
    }
    answer = tempArr +"0"+ tempArr.split("").sort((a,b)=>b-a).join("")
    return answer;
}