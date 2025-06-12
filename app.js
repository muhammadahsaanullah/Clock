let SecHand = document.querySelector(".sec");
let minHand = document.querySelector(".min");
let hourHand = document.querySelector(".hour");


function setDate(){
    let now = new Date();
    let seconds = now.getSeconds();
    let secondsdegree = ((seconds/60) * 360) + 90;      
    SecHand.style.transform = `rotate(${secondsdegree}deg)`;

    let min = now.getMinutes();
    let mindegree = ((min/60)*360)+90;
    minHand.style.transform = `rotate(${mindegree}deg)`;

    let hour = now.getHours();
    let hourdegree = ((hour/12)*360) + ((min/60)*30) + 90;
    hourHand.style.transform = `rotate(${hourdegree}deg)`;
    
}

setInterval(setDate,1000);