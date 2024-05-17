function solution(s) {
    var answer = '';
    //단순히 내림차순 정렬시 유니코드상 대문자가 앞으로옴
    //배열로 바꾸고 sort로 문자내림차순정렬 b.localeCompare(a)사용
    //반복문으로 돌면서 글자가 대문자일경우,소문자일경우
    //각각 변수에 push밀어넣어줌.
    //스프레드연산자로 두배열 합치고 join
    let tempArr = [...s].sort((a,b)=>{
        return b.localeCompare(a);
    });
    let largeStr = [];
    let smallStr = [];
    for(let i = 0; i < tempArr.length; i++){
        let tempStr = tempArr[i]
        if(tempStr === tempStr.toUpperCase()){
            largeStr.push(tempStr);
        }else{
            smallStr.push(tempStr);
        }
    }
    answer = [...smallStr, ...largeStr].join("");
    
    return answer;
}