function solution(a, b) {
    var answer = 0;
    let aFirst = a.toString() + b.toString();
    let bFirst = b.toString() + a.toString();
    // console.log(aFirst)
    answer = aFirst > bFirst? aFirst: aFirst < bFirst? bFirst : aFirst ;
    return +answer;
}