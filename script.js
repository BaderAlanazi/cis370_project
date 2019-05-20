'use strict';
var rL = document.getElementById('redLight');
var gL = document.getElementById('greenLight');
function switchLight() {
    setTimeout(function(){
        rL.style.display = 'none';
        gL.style.display = 'block';
    }, 50);   
    beginRace();
}

// when the winner image is clicked. This function will reset to initial
function reset(){
    gL.style.display = 'none';
    rL.style.display = 'block';
    document.getElementById('item1').style.left = 0;   
    document.getElementById('item2').style.left = 0;
    document.getElementById('round1').style.backgroundColor = "#723e3e";
    document.getElementById('round2').style.backgroundColor = "#723e3e";
    document.getElementById('item1Win').style.display = 'none';
    document.getElementById('item2Win').style.display = 'none';
    document.getElementById('p').innerHTML = "";
    document.getElementById('note').style.display = 'none';

}


// begin the race 
function beginRace(){
    var item1 = document.getElementById('item1').style.left = 0;         
    var item2 = document.getElementById('item2').style.left = 0;
    var itemWidth = document.getElementById('item1').offsetWidth; // get width
    var label = document.getElementById('labelImg').offsetWidth; // get width
    var total1 = item1;
    var total2 = item2;
    var timer = setInterval(function(){
        var rand1 = Math.ceil(Math.random() * 6);
        var rand2 = Math.ceil(Math.random() * 6);
        total1 += rand1;
        total2 += rand2;
        document.getElementById('item1').style.left = total1 + 'px';
        document.getElementById('item2').style.left = total2 + 'px';
        
        // subtract the width of the moving image from the background label. 
        // this variable will give us the finish line.
        var finishPoint = label - itemWidth;
        
        if (total1 >= finishPoint){
            clearInterval(timer); // stop the interval
            document.getElementById('p').innerHTML = "<b>Usain Bolt</b> is the Winner!";
            document.getElementById('round2').style.backgroundColor = 'darkred';
            document.getElementById('round1').style.backgroundColor = 'green';
            document.getElementById('item1Win').style.display = 'block';
            document.getElementById('note').style.display = 'block';

        }
        else if (total2 >= finishPoint){
            clearInterval(timer);
            document.getElementById('p').innerHTML = "<b>Justin Gatlin</b> is the Winner!";
            document.getElementById('round2').style.backgroundColor = 'green';
            document.getElementById('round1').style.backgroundColor = 'darkred';
            document.getElementById('item2Win').style.display = 'block';
            document.getElementById('note').style.display = 'block';
        }
    }, 20);


}