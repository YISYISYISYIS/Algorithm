function solution(num_list) {
    var answer = [];
    let tempArr = num_list.sort((a,b)=>a-b)
    answer = tempArr.slice(5)
    return answer;
}