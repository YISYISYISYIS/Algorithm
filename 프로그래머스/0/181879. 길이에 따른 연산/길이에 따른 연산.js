function solution(num_list) {
    var answer = 0;
    if(num_list.length > 10){
        num_list.reduce((cur,acc)=>{
           return answer = cur+acc; 
        },0)
    }else if(num_list.length <= 10){
        num_list.reduce((cur,acc)=>{
            return answer = cur*acc;
        },1)
    }
    return answer;
}