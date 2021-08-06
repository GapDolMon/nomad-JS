let username;
const data = localStorage.getItem('username');
if (!data){
    username = prompt('Please type your username', 'you');
    localStorage.setItem('username', username);
}


const youname=document.querySelector("#name");
const time=document.querySelector("#nowtime");

if(username < 1){
    youname.innerHTML = ("Hello"+username+"!");
}



var clockTarget = document.getElementById("nowtime");

function clock() {
    var date = new Date();
    var month = date.getMonth();
    var clockDate = date.getDate();
    var day = date.getDay();
    var week = ['일', '월', '화', '수', '목', '금', '토'];
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    clockTarget.innerHTML = month+'월 '+clockDate+'일 '+week[day]+'요일 '+
    hours+'시 '+minutes+'분 '+seconds+'초'
}



function init() {

clock();

// 최초에 함수를 한번 실행시켜주고 
setInterval(clock, 1000);

// setInterval이라는 함수로 매초마다 실행을 해줍니다.

// setInterval은 첫번째 파라메터는 함수이고 두번째는 시간인데 밀리초단위로 받습니다. 1000 = 1초 

}



init();