var divEle=document.querySelector('div'); dateTimes();  function dateTimes(){
    var date2023=new Date(2023,0,1,0,0,0); var ms2023=date2023.getTime(); var myVar=setInterval(dateTimes,1000); var date=new Date(); var msCurrent=date.getTime();  var timeSc=ms2023-msCurrent;  var dateDays=Math.floor(timeSc/(1000*60*60*24));  timeSc=timeSc%(1000*60*60*24); console.log(timeSc);  var dateHours=Math.floor(timeSc/(1000*60*60));  timeSc=timeSc%(1000*60*60); console.log(timeSc);  var dateMinutes=Math.floor(timeSc/(1000*60));  timeSc=timeSc%(1000*60); console.log(timeSc);  var dateSeconds=Math.floor(timeSc/1000); if(parseInt(dateHours)<10){
    dateHours='0'+dateHours; } if(parseInt(dateMinutes)<10){
    dateMinutes='0'+dateMinutes; } if(parseInt(dateSeconds)<10){
    dateSeconds='0'+dateSeconds; }
btf.snackbarShow('新年倒计时：'+dateDays+'天'+dateHours+'时'+dateMinutes+'分'+dateSeconds+'秒',) }