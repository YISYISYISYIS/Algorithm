function solution(sizes) {
    var answer = 0;
    //주어진 배열안의 숫자를 큰값과 작은값으로 구분하고
    //큰값들중 가장 큰수, 그리고 작은값중에 가장큰수를 곱하면 됨
    //큰값,작은값변수를 만들고 순회하면서 크면 값을 누적시켜주는 방식으로 
    let maxNum = 0;
    let minNum = 0;
    for(let i = 0; i < sizes.length; i++ ){
        let tempMaxNum = Math.max(sizes[i][0],sizes[i][1])
        let tempMinNum = Math.min(sizes[i][0],sizes[i][1])
        if(tempMaxNum > maxNum){
            maxNum = tempMaxNum;
        }
        if(tempMinNum > minNum){
            minNum = tempMinNum;
        }
    }
    answer = maxNum * minNum;
    return answer;
}