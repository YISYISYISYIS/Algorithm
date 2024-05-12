function solution(arr) {
    var answer = [];
    //스프레드 연산자로 배열을 쪼갠다음 Math.min으로 최소값을 찾음
    //indexOf메서드로 최소값 인덱스 위치를 찾음
    //splice 메서드로 삭제
    if(arr.length <= 1 || arr[0] === 10){
        return [-1];
    }
    let tempArr = Math.min(...arr);
    let tempNum = arr.indexOf(tempArr);
    arr.splice(tempNum,1);
    answer = arr;
    return answer;
}