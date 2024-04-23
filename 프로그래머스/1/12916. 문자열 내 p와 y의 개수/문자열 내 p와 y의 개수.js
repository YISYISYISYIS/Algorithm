function solution(s){
    var answer = true;
    //대문자랑 소문자 섞여있으니까 toLowerCase로 소문자로 바꿔줌 비교편하게
    //split로 배열로 쪼개서 배열의 길이만큼 반복을시킴
    //조건문으로 p랑 y를 걸러내서 담을 변수들을 각각 선언
    //p와y개수 비교후 같으면 true, 아니면 false
    let smallStr = s.toLowerCase();
    let tempArr = smallStr.split("");
    let tempP = 0;
    let tempY = 0;
    
    for(let i = 0; i < tempArr.length; i++){
        if(tempArr[i] === "p"){
            tempP++;
        }else if(tempArr[i] === "y"){
            tempY++;
        }
    }
    if(tempP === tempY){
        answer = true;
    }else if(tempP !== tempY){
        answer = false;
    }
    
    return answer;
}