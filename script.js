var attempt=3;
var blueball;
var buttonss;
var timer;
var timeLeft = 10;
var timerElement= document.getElementById("timer");
var timetaken= document.getElementById("timer2");
var attemptElement=document.getElementById("attempts");
document.getElementById("start").addEventListener("click",start);
function addButtons(){
    blueball= Math.floor(Math.random() * 50) + 1;
    for (var i = 1; i <= 50; i++) {
    buttonss = document.createElement('button');
    buttonss.innerText = i    ;  
    buttonss.addEventListener('click',pressed);
    buttonss.setAttribute("class", "button"); 
    document.getElementById('button-container').appendChild(buttonss);
   }   
}
function start(){
    document.getElementById("button-container").innerHTML="";
    addButtons();
    document.getElementById("state").innerHTML="";
    attempt=3;
    attemptElement.textContent=attempt;
    timeLeft=10;
    timerElement.textContent = timeLeft;
    timetaken.textContent="";
    clearInterval(timer);
    timers(); 
}
function timers(){
        timer = setInterval(() => {
            if (timeLeft > 0) {
                timerElement.textContent = timeLeft;
                timeLeft--;
            } else {
                clearInterval(timer);
                timerElement.textContent = "Time's up!";
                document.getElementById("state").innerHTML="Game Over"
            }
        }, 1000);
}
function pressed(){
    if(attempt>0 && timeLeft>0){
        attempt--;
        attemptElement.textContent=attempt;
        if(this.innerText<blueball){
            this.setAttribute("class", "button setred");
           }
           if(this.innerText>blueball){
           this.setAttribute("class", "button setgreen");
           }
           if(this.innerText==blueball){
            this.setAttribute("class", "button setblue");
             document.getElementById("state").innerHTML="You Won!";
             timetaken.textContent = (10-timeLeft)-1;
             clearInterval(timer);
           }   
    } 
   if(attempt==0 && this.innerText!=blueball){
        timetaken.textContent = (10-timeLeft)-1;
        clearInterval(timer);
        document.getElementById("state").innerHTML="Game Over";
    } 
}