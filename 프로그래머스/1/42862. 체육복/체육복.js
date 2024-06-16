// function solution(n, lost, reserve) {
//     var answer = 0;
//     //전체 학생수 => n, 도난당한 학생배열 => lost, 여벌의 체육복가져온 학생배열 => reserve 
//     //여벌을 가지고 있는 학생배열만 앞뒤로만 체육복 빌려줄수있음.
//     //여벌가지고온 친구도 도난가능성있음. 이경우 못빌려줌
//     //체육복을 최대한 많이 입을수 있는 경우를 리턴
//     //총학생수를 배열로 반환
//     //lost에 없는 번호는 카운트+
//     //여벌가지고온 친구가 도난당했는지 먼저확인 lost reserver에서 일치경우찾기
//     //v이경우도 결국은 입는거니까 카운트+ 하고 lost reserve에서 배열에서 빼버리는게?
//     // 4,2번이 도난당하고 3,5번이 여유가 있을때 3번이 4번에게 여유분을 주면 2번은 못받음
//     //순서를 sort로 정렬하는게 좋을듯?
//     let totalNum = [];
//     for (let i = 1; i <= n; i++){
//         totalNum.push(i);
//     }
    
//     for(let i = 0; i < totalNum.length; i++){
//         let index = totalNum.indexOf(lost[i])
//         if(index !== -1){
//             totalNum.splice(index, 1)
//         }
//     }
//     // console.log(totalNum);
    
//     let totalZero = [];
//     for (let i = 0; i < lost.length; i++){ 
//         for(let j = 0; j < reserve.length; j++){
//             if(lost[i] === reserve[j]){
//                 totalZero.push(lost[i])
//                 totalNum.push(lost[i])
//             }
//         }
//     }
//     // console.log(totalZero);
//     // console.log(totalNum);
    
//     for(let i = 0; i < totalZero.length; i++){
//         let index = lost.indexOf(totalZero[i]);
//         if(index !== -1){
//             lost.splice(index, 1);
//         }
//         index = reserve.indexOf(totalZero[i]);
//         if(index !== -1){
//             reserve.splice(index,1);
//         }
//     }
//   // console.log(lost,reserve)
    
//     let sortLost = lost.sort((a,b)=>a-b);
//     let sortReserve = reserve.sort((a,b)=>a-b);
//     // console.log(sortLost,sortReserve)
    
//     for(let i = 0; i < sortLost.length; i++){
//         let prevIndex = sortReserve.indexOf(sortLost[i]-1);
//         let nextIndex = sortReserve.indexOf(sortLost[i]+1);
//          // console.log(prevIndex,nextIndex)
//         if(prevIndex !== -1){
//             totalNum.push(sortLost[i]);
//             sortReserve.splice(prevIndex,1);
          
//         }else if(nextIndex !== -1){
//             totalNum.push(sortLost[i]);
//             sortReserve.splice(nextIndex,1);
            
//         }
//     }
    
//     // console.log(totalNum)
//     let temp = new Set(totalNum)
//     for(let i = 0; i < [...temp].length; i++){
//         answer++;
//     }
//     return answer;
// }

function solution(n, lost, reserve) {
    // 여벌 체육복을 가지고 있는 학생 중 도난당한 경우 제거
    let actualLost = lost.filter(l => !reserve.includes(l));
    let actualReserve = reserve.filter(r => !lost.includes(r));
    
    // 도난당한 학생이 체육복을 빌릴 수 있는지 확인
    let borrowable = 0;

    // 정렬하여 탐욕법으로 처리
    actualLost.sort((a, b) => a - b);
    actualReserve.sort((a, b) => a - b);

    actualLost.forEach(l => {
        let borrowerIndex = actualReserve.findIndex(r => r === l - 1 || r === l + 1);
        if (borrowerIndex !== -1) {
            actualReserve.splice(borrowerIndex, 1);
            borrowable++;
        }
    });

    // 체육복을 빌리지 못한 학생의 수를 전체 학생 수에서 뺌
    return n - (actualLost.length - borrowable);
}