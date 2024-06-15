// function solution(babbling) {
//     var answer = 0;
//     //주어진 단어를 조합해서 매개변수로 주어진 배열각요소를 비교후 조합가능시 갯수 ++;
//     //includes로 비교후 일치할시 주어진단어 길이를 저장.
//     //다돌고 일치한 주어진단어들 길이합과 배열안 요소의 길이가 같으면 카운트++
//     let string = [ "aya", "ye", "woo", "ma"];
    
//     for(let i = 0; i < babbling.length; i++){
//         let strLength = 0;
//         for(let j = 0; j < string.length; j++){
//             if(babbling[i].includes(string[j])){
//                 strLength += string[j].length;
//             }
//         }
//         if(strLength === babbling[i].length){
//             answer++;
//         }
//         strLength = 0;
//     }
//     return answer;
// }




// function solution(babbling) {
//     var answer = 0;
//     //연속해서 같은 발음x, 
//     //includes 일치하는 문자있으면 replace로 일치문자대신 ""넣어주고 다시  babbling에 할당.
//     //연속되는 문자열이 있는지 체크하기위해
//     //연속되는 문자열 찾는법 startsWith 라는 내장메서드 여기서 막혀서 검색함
//     //startsWith는 문자열의 시작 부분이 지정된 문자열과 일치하는지 여부를 불린값으로 반환
//     //일치시 false값을 따로 할당
    
//     let str = ["aya", "ye", "woo", "ma"];
   
//     for(let i = 0; i < babbling.length; i++){
//         let tempSame = babbling[i];
//         let talking = true;
        
//         for(let j = 0; j < str.length; j++){
//            if(tempSame.includes(str[j])){
//               tempSame = tempSame.replace(str[j], "");
//                if(tempSame.startsWith(str[j])){
//                    talking = false;
//                }
//             }
//           }
//         if(talking && tempSame.length === 0){
//             answer++;
//         }
//     }
    
//     return answer;
// }


// function solution(babbling) {
//     var answer = 0;
//     let str = ["aya", "ye", "woo", "ma"];
//     //말할수있는문자와 주어진 문자를 비교하는데
//     //주어진문자같은게 2개가 붙어있지않지만 떨어져서 있는경우도 발음은 가능하다는걸 인지
//     //while문으로 있을때까지 includes로 같은 문자 있는지 찾고 replace로 제거후 빈문자열 추가
//     //연속되는 문자열 찾는법 startsWith 라는 내장메서드 여기서 막혀서 검색함
//     //startsWith는 문자열의 시작 부분이 지정된 문자열과 일치하는지 여부를 불린값으로 반환
//     //일치시 연속된다는 이야기이므로 발음불가
//     //제거하고난 변수길이가 0이고 연속된문자열이 아닌경우만 +카운트
    
//     for(let i = 0; i < babbling.length; i++){
//         let tempStr = babbling[i];
//         let speak = true;
        
//         for (let j = 0; j < str.length; j++){
//             while(tempStr.includes(str[j])){
//                 tempStr = tempStr.replace(str[j],"");
//                 if(tempStr.startsWith(str[j])){
//                     speak = false;
//                     break;
//                 }
//             }
//         }
//         if(speak && tempStr.length === 0){
//             answer++;
//         }
//     }
   
//     return answer;
// }
//여러시도후 실패 
//다른분 풀이 참고
//repeat이라는 메서드를 활용. 연속되는 경우를 break로 빠져나옴
//spilt에 구분자로 str[j]할당후 join할때 일부로 공백을 넣어서 
//남은 단어들이 합쳐져서 혹시 조건에 만족하는 단어가 생성되는걸 막음
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