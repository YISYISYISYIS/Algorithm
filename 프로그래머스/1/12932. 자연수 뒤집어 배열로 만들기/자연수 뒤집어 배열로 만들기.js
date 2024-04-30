function solution(n) {
    var answer = [];
    let tempNum = 0;
    
    //숫자를 toString로 문자열로 바꿔주고
    //split으로 쪼개준다음 배열로 바뀐값을 map으로 돌면서 다시 숫자로 바꾸고
    //리버스 메서드(뒤집어주는) 써주면 될거같다.
    tempNum = n.toString().split("");
    answer = tempNum.map((value) => {
        return Number(value);
    })
    return answer.reverse();
}