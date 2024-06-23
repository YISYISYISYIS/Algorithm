function solution(num_list) {
    var answer = [];
    // console.log(num_list[num_list.length-1])
    let lastIndex = num_list[num_list.length-1];
    let prevIndex = num_list[num_list.length-2];
    if(lastIndex > prevIndex){
        answer = [...num_list,(lastIndex-prevIndex)];
    }else{
        answer = [...num_list,(lastIndex*2)]
    }
    
    return answer;
}