process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
   //초창기 표준입출력방식 자바스크립트문제 답을 콘솔로 찍어야함.
    //세로길이를 먼저 반복문으로 돌리고 
    //그안에 중첩반복문으로 가로길이만큼 반복
    //줄바꾸는 법 \n
    
    let result =""
    for(let i = 0; i < b; i++){
        for(let j = 0; j < a; j++){
            result += "*"; 
        }
        result += "\n";
    }
    console.log(result)
});