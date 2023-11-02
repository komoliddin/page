function getDate()
{
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth();
    var day = date.getDay();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var milliseconds = date.getMilliseconds();
    //По надобности условие ниже повторить с minutes и hours
    if(seconds < 10)
    {
        seconds = '0' + seconds;
    }
    document.getElementById('timedisplay').innerHTML = year;
}
setInterval(getDate, 1000);

function myFunction1() {
    var copyText = document.getElementById("uzcard1");
    copyText.select();
    document.execCommand("copy");
}

function myFunction2() {
    var copyText = document.getElementById("uzcard2");
    copyText.select();
    document.execCommand("copy");
}

function myFunction3() {
    var copyText = document.getElementById("yandex1");
    copyText.select();
    document.execCommand("copy");
}

function myFunction4() {
    var copyText = document.getElementById("btc1");
    copyText.select();
    document.execCommand("copy");
}

function myFunction5() {
    var copyText = document.getElementById("btc2");
    copyText.select();
    document.execCommand("copy");
}

function myFunction6() {
    var copyText = document.getElementById("eth1");
    copyText.select();
    document.execCommand("copy");
}