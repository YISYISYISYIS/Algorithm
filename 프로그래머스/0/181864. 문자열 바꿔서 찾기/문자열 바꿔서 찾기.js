function solution(myString, pat) {
    var answer = 0;
    let tempStr = "";
    for(let i =0; i < myString.length; i++){
        if(myString[i] === "A"){
            tempStr += "B";
        }else{
            tempStr += "A";
        }
    }
    // console.log(tempStr)
    if(tempStr.includes(pat)){
        answer = 1;
    }else{
        answer = 0;
    }
    return answer;
}