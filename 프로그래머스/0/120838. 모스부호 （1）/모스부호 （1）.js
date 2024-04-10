function solution(letter) {
    var answer = '';
    let morse = { 
    '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
    '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
    '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
    '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
    '-.--':'y','--..':'z'
    }
    let arrLetter = letter.split(" ");
    
    answer = arrLetter.reduce(function(saveValue,currValue){
         return saveValue + morse[currValue];
    },"");
    return answer;
}




// function solution(letter) {
//     var answer = '';
//     let morse = { 
//     '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
//     '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
//     '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
//     '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
//     '-.--':'y','--..':'z'
//     }
//     let arrLetter = letter.split(" ");
    
//     for(let i = 0; i < arrLetter.length; i++){
//         if(Object.keys(morse).includes(arrLetter[i])){
//             answer += morse[arrLetter[i]];
//         }
//     }
//     return answer;
// }