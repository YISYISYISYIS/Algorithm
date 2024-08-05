function solution(strArr) {
    var answer = [];
    let deleteAd = (strArr)=>{
        return strArr.filter((str)=> !str.includes('ad'))
    } 
    answer = deleteAd(strArr);
    return answer;
}