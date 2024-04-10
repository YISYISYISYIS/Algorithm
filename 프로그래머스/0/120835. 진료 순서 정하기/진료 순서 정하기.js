function solution(emergency) {
    var answer = [];
    let rank = {};
    let sequenceTemp = emergency.slice().sort(function(a,b){
        return b-a;
    });
    sequenceTemp.forEach(function(value,index){
         return rank[value] = index+1;
    });
    answer = emergency.map(function(value){
        return rank[value];
    });
    return answer;
}





// function solution(emergency) {
//     var answer = [];
//     let sequenceTemp = emergency.slice().sort(function(a,b){
//         return b-a;
//     });
  
//     for(let i = 0; i < emergency.length; i++){
//         let temp = sequenceTemp.indexOf(emergency[i])+1;
//         answer.push(temp);
//     }
//     return answer;
// }