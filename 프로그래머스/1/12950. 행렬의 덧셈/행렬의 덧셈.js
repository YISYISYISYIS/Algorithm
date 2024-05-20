function solution(arr1, arr2) {
    var answer = [];
    //다차원배열임. arr1[i][j]이런식으로 표현할수 있음
    //문제는 결과값도 다차원 배열로 받아야함.
    //i중첩문때 배열을 생성해줌
    //다차원배열이 아닌경우도 덧셈을 해줘야해서 
    //j중첩문에서 길이를 arr1[i]로 그래야 길이가 1이든 3이든 그만큼만 배열을 순회함
    
    for(let i = 0; i < arr1.length; i++){
        let tempArr = [];
        for(let j = 0; j < arr1[i].length; j++){
           tempArr.push(arr1[i][j] + arr2[i][j])
        }
        answer.push(tempArr)
    }
    return answer;
}