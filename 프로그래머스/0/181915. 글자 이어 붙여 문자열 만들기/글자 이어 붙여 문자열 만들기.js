function solution(my_string, index_list) {
    var answer = '';
    
    // for(let i = 0; i < index_list.length; i++){
    //     answer += my_string[index_list[i]];
    // }
    
    answer = index_list.reduce((acc,curr)=>{
          return acc + my_string[curr];
    },'')
    return answer;
}