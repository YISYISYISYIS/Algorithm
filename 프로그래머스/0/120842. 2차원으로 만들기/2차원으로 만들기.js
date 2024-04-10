function solution(num_list, n) {
    var answer = [];
    
    answer = num_list.reduce(function(saveValue,currValue,index){
        if(index % n === 0){
            saveValue.push([currValue]);
        }else{
            saveValue[saveValue.length-1].push(currValue);
        }
        return saveValue;
    },[]);
    return answer;
}




// function solution(num_list, n) {
//     var answer = [];
    
//     for(let i = 0; i < num_list.length; i+=n){
//         let temp = num_list.slice(i,i+n);
//         answer.push(temp);
//     }
//     return answer;
// }