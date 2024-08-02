function solution(num_list) {
    var answer = 0;
    let num1 = 0;
    let num2 = 0;
    for(let i = 0; i < num_list.length; i++){
        if(i%2 === 0){
            num1 += num_list[i];
        }else{
            num2 += num_list[i];
        }
    }
    if(num1 >= num2){
        answer = num1;
    }else{
        answer = num2;
    }
    return answer;
}