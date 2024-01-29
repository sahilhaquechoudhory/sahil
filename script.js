const endDate="31 DECEMBER 2026 00:00 AM"
const inputs= document.querySelectorAll("input")

document.getElementById("end-Date").innerText=endDate;
const clock = ()=>{
    const end = new Date(endDate);
    const now = new Date();
    const diff= (end-now)/1000;
    if(diff<0) return;
    const days=Math.floor(diff / 3600 / 24);
    const hours= Math.floor((diff/3600)%24);
    const minutes=Math.floor((diff/60)%60);
    const seconds= Math.floor(diff%60);
    inputs[0].value = days;
    inputs[1].value= hours;
    inputs[2].value= minutes;
    inputs[3].value=seconds;
}
clock()


setInterval(
    ()=>{
        clock()
    }
    ,1000
)