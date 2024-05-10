function solution(phone_number) {
    var answer = '';
    //뒷자리 출발이라서 for문으로 뒤에서부터 돌수있게 증가식을 -로해서
    //조건문으로 뒤에서 5번째 숫자부터 전부 *넣어주면?
    //그러면 반대로 값이들어오니까 revers쓸려면 배열로바꿔주고 해야돼는데
    //그냥 처음부터 값을 *로 넣고 ㅁ개변수값 length-4에서 복사후 값을 더해주면?
    //slice검색해보니 문자열도 됨
    for(let i = 0; i < phone_number.length - 4; i++){
        answer += "*"
    }
    answer += phone_number.slice(-4);
    return answer;
}