function solution(arr, n) {
    var answer = [];
    let tempArr = arr;
    if(arr.length % 2 !== 0){
        for(let i = 0 ; i <= tempArr.length; i+=2){
            tempArr[i] += n;
        }
        // console.log(tempArr)
    }else{
        for(let i = 1; i <= tempArr.length; i+=2){
            tempArr[i] += n;
        }
    }
    answer = tempArr;
    return answer;
}