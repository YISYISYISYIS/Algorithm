function solution(num_list) {
    var answer = 0;
    let even = "";
    let odd = "";
    for(let num of num_list){
        if(num % 2 === 0){
            even += num;
        }else{
            odd += num;
        }
    }
    // console.log(odd)
    answer = Number(even)+ Number(odd);
    return answer;
}