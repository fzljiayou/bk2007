function countDown(){
    var d = new Date(2020,12,28,23,10,0)
    var now =  Date. now() ;
    var num = d.getTime() - now;
    var secnod = parseInt (num/1000)%60;
    var minute = parseInt ( num/1000/60)%60;
    var hours= parseInt( num/1000/60/60)%24;
    if (hours<10){
        log1.innerHTML='0'+ hours;
    }else{
        log1.innerHTML=hours;
    }

    if( minute<10){
        log2.innerHTML='0'+minute;
    }else{
        log2.innerHTML=minute;
    }

    if (secnod<10){
        log3.innerHTML='0'+secnod;
    }else{
        log3.innerHTML=secnod;
    }
}
setInterval( function() {
countDown();
}, 1000);
countDown();