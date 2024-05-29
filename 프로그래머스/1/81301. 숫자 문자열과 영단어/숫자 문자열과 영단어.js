function solution(s) {
    var answer = 0;
    //인덱스가 string이면 임시변수에 더하고 number면 결과값에 바로더함
    //임시변수 에 더해진문자열을 숫자에 대응되는 영단어와 비교후 숫자반환
    
    
    let totalNumber = ["zero","one","two","three","four","five","six","seven","eight","nine"];
    let tempStr = "";
    let result = "";
    
    for(let i = 0; i < s.length; i++){
        tempStr += s[i];
        if(!isNaN(tempStr)){
            result += tempStr;
            tempStr = "";
        }else{
            for(let j = 0; j < totalNumber.length; j++){
                if(tempStr === totalNumber[j]){
                    result += j;
                    tempStr = "";
                    break;
                }
            }
        }
    }
    answer = Number(result);
    return answer;
}