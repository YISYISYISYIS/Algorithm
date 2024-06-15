function solution(babbling) {
    var answer = 0;
    let str = ["aya", "ye", "woo", "ma"];
   
    for(let i = 0; i < babbling.length; i++){
        let tempSame = babbling[i];
        
        for(let j = 0; j < str.length; j++){
           if(tempSame.includes(str[j].repeat(2))){
              break;
            }
            tempSame = tempSame.split(str[j]).join(" ");
            }
        if(tempSame.split(" ").join("").length === 0){
            answer++;
        }
    }
    
    return answer;
}