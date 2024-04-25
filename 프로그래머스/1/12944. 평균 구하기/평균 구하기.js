function solution(arr) {
    var answer = 0;
    //배열을 순회하면서 각각의 값을 더한후
    //배열의 길이만큼 나눠주면 될거같다.
    let tempNum = 0;
    for(let i = 0; i < arr.length; i++){
        tempNum += arr[i];
    }
    answer = tempNum/arr.length;
    return answer;
}