setInterval(()=>{
    let date=new Date()
    
    let forHours=document.getElementById("forHours")
    forHours.innerHTML=date.getHours()

    let forHoMinutes=document.getElementById("forHoMinutes")
    forHoMinutes.innerHTML=date.getMinutes()

    let forSeconds=document.getElementById("forSeconds")
    forSeconds.innerHTML=date.getSeconds()
},1000);