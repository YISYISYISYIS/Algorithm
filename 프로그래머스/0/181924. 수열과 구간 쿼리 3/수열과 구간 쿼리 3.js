function solution(arr, queries) {
    var answer = [...arr];
    for(let i = 0; i < queries.length; i++){
        let [tempArr1,tempArr2] = queries[i];
        [answer[tempArr1], answer[tempArr2]] = [answer[tempArr2], answer[tempArr1]] 
    }
    return answer;
}