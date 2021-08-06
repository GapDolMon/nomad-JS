

var clockTarget = document.getElementById("nowtime");

function clock() {
    var date = new Date();
    var years = date.getFullYear();
    var month = date.getMonth();
    var clockDate = date.getDate();
    var day = date.getDay();
    var week = ['일', '월', '화', '수', '목', '금', '토'];
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    clockTarget.innerHTML = years+'년 '+month+'월 '+clockDate+'일 '+week[day]+'요일 '+
    hours+'시 '+minutes+'분 '+seconds+'초'
}


function init() {
    clock();
    setInterval(clock, 1000);
    }
    
    
    
    init();