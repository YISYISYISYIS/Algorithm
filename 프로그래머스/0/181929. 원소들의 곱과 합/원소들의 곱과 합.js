function solution(num_list) {
    var answer = 0;
    let multiply = 1;
    let plus = 0;
    let square = 1;
    
    num_list.forEach((num)=>{
         multiply *= num;
        plus += num;
    })
    square = plus**2
    // console.log(square)
    if(multiply < square){
        answer = 1;
    }else{
        answer;
    }
    return answer;
}