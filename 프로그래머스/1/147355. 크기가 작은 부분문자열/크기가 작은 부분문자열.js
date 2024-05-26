function solution(t, p) {
    var answer = 0;
    //t문자열을 한칸식 p의 길이만큼 범위로 옮김
    //p의길이만큼 잘린 t가 p보다 작거나 같을경우 카운트 +1
    //slice로 t를 p의 길이만큼 자름
    //i만큼 옮기면서 slice끝부분인덱스도 i만큼더해줌 그래야 p의 길이만큼계속 자를수있음
    //문자열을 숫자로 바꿔서 비교
    
    let pLength = p.length;
    let pNumber = Number(p);
    for(let i = 0; i <= t.length - pLength; i++){
        let tLength = t.slice(i,i+pLength);
        let tNumber = Number(tLength);
        if(tNumber <= pNumber){
            answer++
        }
     }
    return answer;
}