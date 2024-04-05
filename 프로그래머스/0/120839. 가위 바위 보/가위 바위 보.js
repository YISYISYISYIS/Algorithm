function solution(rsp) {
    var answer = '';
    let winRsp = {
        "2": "0",
        "0": "5",
        "5": "2",
    }
    
    answer = [...rsp].map(function(rspTemp){
       return winRsp[rspTemp]; 
    }).join("");
    return answer;
}



// function solution(rsp) {
//     var answer = '';
//     let winRsp = {
//         "2": "0",
//         "0": "5",
//         "5": "2",
//     }
    
//     for(let rspTemp of rsp){
//         answer += winRsp[rspTemp];
//     }
//     return answer;
// }



// function solution(rsp) {
//     var answer = '';
    
//     for(let rspTemp of rsp){
//         switch(rspTemp){
//             case "2":
//                 answer += 0;
//                 break;
//             case "0":
//                 answer += 5;
//                 break;
//             case "5":
//                 answer += 2;
//                 break;
//             default:
//                 break;
//         }
//     }
//     return answer;
// }



// function solution(rsp) {
//     var answer = '';
    
//     for(let rspTemp of rsp){
//         if(rspTemp === "2"){
//             answer += 0;
//         }else if(rspTemp === "0"){
//             answer += 5;
//         }else{
//             answer += 2;
//         }
//     }
//     return answer;
// }