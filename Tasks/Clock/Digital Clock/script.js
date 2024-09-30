function Time() {
    var x = new Date();
    document.getElementsByClassName('hours')[0].innerHTML = x.getHours().toString().padStart(2,'0');
    document.getElementsByClassName('minutes')[0].innerHTML = x.getMinutes().toString().padStart(2,'0');
    document.getElementsByClassName('seconds')[0].innerHTML = x.getSeconds().toString().padStart(2,'0');
}
setInterval(Time,1000);