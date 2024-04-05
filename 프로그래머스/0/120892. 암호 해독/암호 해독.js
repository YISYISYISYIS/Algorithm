function solution(cipher, code) {
    var answer = '';
    let cipherArr = cipher.split("");
    
    answer = cipherArr.filter(function(temp,i){
        return (i+1) % code === 0;
    }).join("");
    return answer;
}



// function solution(cipher, code) {
//     var answer = '';
    
//     for(let i = 0; i < cipher.length; i++){
//         if((i+1) % code === 0){
//             answer += cipher[i];
//         }
//     }
//     return answer;
// }