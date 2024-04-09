function solution(age) {
    var answer = '';
    let alphabet = ["a","b","c","d","e","f","g","h","i","j"];
    let ageStr = age.toString();
    let strNum = ageStr.split("");
    
    for(let i = 0; i < strNum.length; i++){
        let alphabetNum = Number(strNum[i]);
        answer += alphabet[alphabetNum];
    }
    return answer;
}