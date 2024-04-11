function solution(my_string) {
    var answer = 0;
    let tempNum ="";
    let tempArr = [];
    
    for(let i = 0; i < my_string.length; i++){
        if(!isNaN(my_string[i])){
            tempNum += my_string[i];
        }else{
            if(tempNum !== ""){
                tempArr.push(tempNum)
                tempNum = "";
            }
        }
    }
    if(tempNum !== ""){
        tempArr.push(tempNum);
    }
    for(let num of tempArr){
        answer += Number(num);
    }
    return answer;
}