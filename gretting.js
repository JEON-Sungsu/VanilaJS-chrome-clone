const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const USER_LS="currentUser", //유저 로컬 스토리지
    SHOWING_CN="showing";

 function saveName(text) {
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

/* 아래의 askForName() 을 통해서 이 함수가 실행된다면,
1. submit 이라는 이벤트를 통해 발생되는 기본 동작을 멈추고
2. input에 submit이 되어지는 값, 즉 유저 이름을 집어넣고 paintGreeting 함수를 실행시키고
3. saveName 함수를 실행시켜, 저장되어진 값을 로컬스토리지에 저장시키는 함수를 실행시켜라.  */


function askForName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}
/* 처음 해당 앱을 사용시엔 당연히 이름이 없으므로 askForName() 함수가 가장 먼저 실행되어지게 되어있다.
classList.add(SHOWING_CN) 매써드를 통해서 form 태그가 보여지게 하는 클래스를 추가시키고,
form 태그를 통해서 submit이라는 event 가 발생하게 된다면, handleSubmit() 이라는 함수를 실행시켜라 */


function paintGreeting(text){
    form.classList.remove(SHOWING_CN); //input 태그를 없애는, CSS로 설정된 클래스를 input 태그에 추가하고 
    greeting.classList.add(SHOWING_CN);  // 반대로 <h4> 태그를 보여줘라
    greeting.innerText = `Hello ${text}!!
    What are you gonna do today?`; /* 단 <h4> 태그를 보여줄 때 내부에 Hello (text) 를 출력해라. 이때 
    text 가 뭐냐면 handleSubmit 함수에 있는, currentValue 변수 즉 input 에 입력되어진 값을 의미한다. 
    HTML 에서 input 으로 사용자의 이름을 입력하라고 했으니, 입력되는 것은 결국 사용자의 이름이겠지? */
} 

function loadeName() {
    const currentUser = localStorage.getItem(USER_LS);
    /* getItem 이라는 메쏘드는, 로컬스토리지의 USER_LS 즉 currentUser 라는 스트링으로 정의된 키의 값 을 리턴하는
    메쏘드이다. 그러므로 변수 currentUser 는 일련의 과정을 통해 저장된 유저의 이름 혹은 저장 안되어있는, 즉 
    값이 없는 상태를 의미한다.*/
    if (currentUser === null) {
        askForName();
        /* 그래서 만약 currentUser 변수에 값이 존재하지 않을때는 askForName() 이라는 함수를 실행시키고 */
    } else {
        paintGreeting(currentUser);
    }
    //이름이 저장되어있다면, paintGreeting 이라는 함수를 실행시켜라. 
}




function init() {
    loadeName()
}

init()