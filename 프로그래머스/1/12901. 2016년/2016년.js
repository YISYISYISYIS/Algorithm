function solution(a, b) {
    var answer = '';
    // 이거는 마치 저번에 chatCodeAt 처럼 자바스크립트에서 제공하는 객체,메서드를 이용해야함
    // new Date() 객체와 getDay() 메서드
    // new Date()객체는 날짜와 시간을 나타내는 객체
    // new Date(year, month, day, hours, minutes, seconds, ms)와 같이 
    //특정 날짜와 시간을 나타내는객체가 생성
    // getDay()는 Date 객체의 메서드중 하나. 요일을 나타내는 정수값 반환
    //0~6 까지 일월화수목금토 
    let week = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
    let tempDay = new Date(2016,a-1,b)
    let tempWeek = tempDay.getDay();
    
    answer = week[tempWeek]
    
    return answer;
}