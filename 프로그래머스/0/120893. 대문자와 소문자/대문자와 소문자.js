function solution(my_string) {
    var answer = '';
    let strTemp = my_string.split("");
    
    answer = strTemp.map(function(temp){
        if(temp === temp.toUpperCase()){
            return temp.toLowerCase();
        }else if(temp === temp.toLowerCase()){
            return temp.toUpperCase();
        }
    })
    answer = answer.join("");
    return answer;
}



// function solution(my_string) {
//     var answer = '';
//     for(let i = 0; i < my_string.length; i++){
//         if(my_string[i] === my_string[i].toUpperCase()){
//             answer += my_string[i].toLowerCase();
//         }else if(my_string[i] !== my_string[i].toUpperCase()){
//             answer += my_string[i].toUpperCase();
//         }
//     }
//     return answer;
// }