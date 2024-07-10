function solution(arr1, arr2) {
    var answer = 0;
    if(arr1.length > arr2.length){
        answer = 1;
    }else if(arr1.length < arr2.length){
        answer = -1;
    }else{
        let tempArr1 = arr1.reduce((acc,cur)=>{
           return acc+cur; 
        },0)
        let tempArr2 = arr2.reduce((acc,cur)=>{
            return acc+cur;
        })
        answer = tempArr1 > tempArr2 ? answer = 1:tempArr1 < tempArr2 ? answer= -1: 0
    }
    return answer;
}