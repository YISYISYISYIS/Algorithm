function solution(num_list) {
    var answer = [];
    let tempArr = [];
    tempArr = num_list.sort((a,b)=>a-b)
    answer = tempArr.splice(0,5)
    return answer;
}