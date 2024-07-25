function solution(num_list, n) {
    var answer = [];
    let tempArr1 = num_list.slice(0,n)
    let tempArr2 = num_list.slice(n)
    answer.push(...tempArr2,...tempArr1)
    
    return answer;
}