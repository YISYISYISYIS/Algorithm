function solution(numbers) {
    var answer = [];
    //배열안의 모든 수를 순회하면서 서로 더해야함 
    //중첩반복문으로 j에 +i를 해줌으로써 j반복문의 조건을 
    //배열의 끝까지 순회할수있게 만듬
    //Set처음써봤는데 내장객채라고함. 중복값을 허용하지않음
    //모든값을 일단 임시배열에 담고 Set활용해서 중복제거
    //제거한값을 스프레드연산자로 다시 배열로 뿌려줌.
    //오름차순정렬
    let tempArr = [];
    for(let i = 0; i < numbers.length; i++){
        for(let j = i+1; j < numbers.length; j++){
            tempArr.push(numbers[i]+numbers[j])
        }
    }
    let arrSet = new Set(tempArr);
    let result = [...arrSet];
    
    answer = result.sort((a,b)=> a-b)
    return answer;
}