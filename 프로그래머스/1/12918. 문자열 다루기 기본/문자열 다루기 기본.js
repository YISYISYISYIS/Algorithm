function solution(s) {
    var answer = true;
    //s.length를 확인후 
    //문자열을 순회하면서 isNaN(NaN값이니?)이 true면 false리턴, 아니면true
    console.log(+s)
    if(s.length === 4 || s.length === 6){
        for(let i = 0; i < s.length; i++){
            if(isNaN(s[i]) === true || s[i] === ""){
                return false;
            }
        }
    }else{
        return false;
    }
    
    return answer;
}