function solution(strArr) {
    var answer = 0;
    let tempArr = {};
    for(let str of strArr){
        let arrLength = str.length;
        if(tempArr[arrLength]){
            tempArr[arrLength]++;
        }else{
            tempArr[arrLength] = 1;
        }
    }
    for(let obj in tempArr){
        if(tempArr[obj] > answer){
            answer = tempArr[obj];
        }
    }
    return answer;
}