//if we click on start/reset then we have to check whether we are playing or not.
    //if we are playing
         //reload the page
    //if not playing
       //set score to 0
        //show countdown box
//         reduce time by 1 sec in loops 
//           time left?
//             yes-> continue
//             no-> game over
//         change button to reset
//         generate new Q&A 
        
// if we click on answer box
//       if we are playing
//             correct?
//                  yes
//                    increase score  
//                    show correct box for 1 sec
//                    generate new Q&A
//                 no 
//                    show try again box for 1 sec 

// document.getElementById("button").onclick = function(){
//     do
// }
    document.getElementById("button").onclick = function () {
        var score = -1;
        var res = document.getElementById("button");
        if (res.innerHTML == "Start") {
            boxdisplay();
        }
        else {
            window.location.reload(true);
        }
        function boxdisplay() {
            document.getElementById("score-span").style.display = "inline";
            document.getElementById("score").style.display = "block";
            document.getElementById("time").style.display = "block";
            document.getElementById("question").style.display = "block";
            document.getElementById("instruction").style.display = "block";
            document.getElementById("box1").style.display = "block";
            document.getElementById("box2").style.display = "block";
            document.getElementById("box3").style.display = "block";
            document.getElementById("box4").style.display = "block";
            document.getElementById("button").innerHTML = "Reset";
            printquestion()
        }
        var x = 60;
        var count = setInterval(function () {
            x--;
            document.getElementById("time").innerHTML = "Time Remaining : " + x + " sec";
            if (x == 0) {
                timeover();
            }
        }
            , 1000);
        function timeover() {
            clearInterval(count);
            document.getElementById("question").innerHTML = "Time Up !! </br> Your Score : " + score;
            document.getElementById("question").style.fontSize = "5rem";
            document.getElementById("instruction").style.display = "none";
            document.getElementById("box1").style.display = "none";
            document.getElementById("box2").style.display = "none";
            document.getElementById("box3").style.display = "none";
            document.getElementById("box4").style.display = "none";
            document.getElementById("boxes").style.display = "none";

        }
        function printquestion() {
            score++;
            document.getElementById("score-span").innerHTML = score;
            var q1 = Math.round(Math.random() * 10);
            var q2 = Math.round(Math.random() * 10);
            var q3 = Math.round(Math.random() * 3);
            var q4 = Math.round(Math.random() * 3);
            {
                if (q3 == 0) {
                    document.getElementById("question").innerHTML = q1 + '+' + q2;
                    if (q4 == 0) {
                        document.getElementById("box1").innerHTML = q1 + q2;
                        document.getElementById("box2").innerHTML = Math.round(Math.random() * 20);
                        document.getElementById("box3").innerHTML = Math.round(Math.random() * 20);
                        document.getElementById("box4").innerHTML = Math.round(Math.random() * 20);
                        document.getElementById("box1").onclick = function () {
                            printquestion();
                        }
                        document.getElementById("box2").onclick = function () {
                            gameover();
                        }
                        document.getElementById("box3").onclick = function () {
                            gameover();
                        }
                        document.getElementById("box4").onclick = function () {
                            gameover();
                        }

                    }
                    if (q4 == 1) {
                        document.getElementById("box2").innerHTML = q1 + q2;
                        document.getElementById("box1").innerHTML = Math.round(Math.random() * 20);
                        document.getElementById("box3").innerHTML = Math.round(Math.random() * 20);
                        document.getElementById("box4").innerHTML = Math.round(Math.random() * 20);
                        document.getElementById("box2").onclick = function () {
                            printquestion();
                        }
                        document.getElementById("box1").onclick = function () {
                            gameover();
                        }
                        document.getElementById("box3").onclick = function () {
                            gameover();
                        }
                        document.getElementById("box4").onclick = function () {
                            gameover();
                        }
                    }
                    if (q4 == 2) {
                        document.getElementById("box3").innerHTML = q1 + q2;
                        document.getElementById("box2").innerHTML = Math.round(Math.random() * 20);
                        document.getElementById("box1").innerHTML = Math.round(Math.random() * 20);
                        document.getElementById("box4").innerHTML = Math.round(Math.random() * 20);
                        document.getElementById("box3").onclick = function () {
                            printquestion();
                        }
                        document.getElementById("box2").onclick = function () {
                            gameover();
                        }
                        document.getElementById("box1").onclick = function () {
                            gameover();
                        }
                        document.getElementById("box4").onclick = function () {
                            gameover();
                        }
                    }
                    if (q4 == 3) {
                        document.getElementById("box4").innerHTML = q1 + q2;
                        document.getElementById("box2").innerHTML = Math.round(Math.random() * 20);
                        document.getElementById("box3").innerHTML = Math.round(Math.random() * 20);
                        document.getElementById("box1").innerHTML = Math.round(Math.random() * 20);
                        document.getElementById("box4").onclick = function () {
                            printquestion();
                        }
                        document.getElementById("box2").onclick = function () {
                            gameover();
                        }
                        document.getElementById("box3").onclick = function () {
                            gameover();
                        }
                        document.getElementById("box1").onclick = function () {
                            gameover();
                        }
                    }
                }
                if (q3 == 1) {
                    document.getElementById("question").innerHTML = q1 + "-" + q2;
                    if (q4 == 0) {
                        document.getElementById("box1").innerHTML = q1 - q2;
                        document.getElementById("box2").innerHTML = Math.round(Math.random() * 20);
                        document.getElementById("box3").innerHTML = Math.round(Math.random() * 20);
                        document.getElementById("box4").innerHTML = Math.round(Math.random() * 20);
                        document.getElementById("box1").onclick = function () {
                            printquestion();
                        }
                        document.getElementById("box2").onclick = function () {
                            gameover();
                        }
                        document.getElementById("box3").onclick = function () {
                            gameover();
                        }
                        document.getElementById("box4").onclick = function () {
                            gameover();
                        }
                    }
                    if (q4 == 1) {
                        document.getElementById("box2").innerHTML = q1 - q2;
                        document.getElementById("box1").innerHTML = Math.round(Math.random() * 20);
                        document.getElementById("box3").innerHTML = Math.round(Math.random() * 20);
                        document.getElementById("box4").innerHTML = Math.round(Math.random() * 20);
                        document.getElementById("box2").onclick = function () {
                            printquestion();
                        }
                        document.getElementById("box1").onclick = function () {
                            gameover();
                        }
                        document.getElementById("box3").onclick = function () {
                            gameover();
                        }
                        document.getElementById("box4").onclick = function () {
                            gameover();
                        }
                    }
                    if (q4 == 2) {
                        document.getElementById("box3").innerHTML = q1 - q2;
                        document.getElementById("box2").innerHTML = Math.round(Math.random() * 20);
                        document.getElementById("box1").innerHTML = Math.round(Math.random() * 20);
                        document.getElementById("box4").innerHTML = Math.round(Math.random() * 20);
                        document.getElementById("box3").onclick = function () {
                            printquestion();
                        }
                        document.getElementById("box2").onclick = function () {
                            gameover();
                        }
                        document.getElementById("box4").onclick = function () {
                            gameover();
                        }
                        document.getElementById("box1").onclick = function () {
                            gameover();
                        }
                    }
                    if (q4 == 3) {
                        document.getElementById("box4").innerHTML = q1 - q2;
                        document.getElementById("box2").innerHTML = Math.round(Math.random() * 20);
                        document.getElementById("box3").innerHTML = Math.round(Math.random() * 20);
                        document.getElementById("box1").innerHTML = Math.round(Math.random() * 20);
                        document.getElementById("box4").onclick = function () {
                            printquestion();
                        }
                        document.getElementById("box2").onclick = function () {
                            gameover();
                        }
                        document.getElementById("box3").onclick = function () {
                            gameover();
                        }
                        document.getElementById("box1").onclick = function () {
                            gameover();
                        }
                    }
                }
                if (q3 == 2) {
                    document.getElementById("question").innerHTML = q1 + "*" + q2;
                    if (q4 == 0) {
                        document.getElementById("box1").innerHTML = q1 * q2;
                        document.getElementById("box2").innerHTML = Math.round(Math.random() * 20);
                        document.getElementById("box3").innerHTML = Math.round(Math.random() * 20);
                        document.getElementById("box4").innerHTML = Math.round(Math.random() * 20);
                        document.getElementById("box1").onclick = function () {
                            printquestion();
                        }
                        document.getElementById("box2").onclick = function () {
                            gameover();
                        }
                        document.getElementById("box3").onclick = function () {
                            gameover();
                        }
                        document.getElementById("box4").onclick = function () {
                            gameover();
                        }
                    }
                    if (q4 == 1) {
                        document.getElementById("box2").innerHTML = q1 * q2;
                        document.getElementById("box1").innerHTML = Math.round(Math.random() * 20);
                        document.getElementById("box3").innerHTML = Math.round(Math.random() * 20);
                        document.getElementById("box4").innerHTML = Math.round(Math.random() * 20);
                        document.getElementById("box2").onclick = function () {
                            printquestion();
                        }
                        document.getElementById("box1").onclick = function () {
                            gameover();
                        }
                        document.getElementById("box3").onclick = function () {
                            gameover();
                        }
                        document.getElementById("box4").onclick = function () {
                            gameover();
                        }

                    }
                    if (q4 == 2) {
                        document.getElementById("box3").innerHTML = q1 * q2;
                        document.getElementById("box2").innerHTML = Math.round(Math.random() * 20);
                        document.getElementById("box1").innerHTML = Math.round(Math.random() * 20);
                        document.getElementById("box4").innerHTML = Math.round(Math.random() * 20);
                        document.getElementById("box3").onclick = function () {
                            printquestion();
                        }
                        document.getElementById("box2").onclick = function () {
                            gameover();
                        }
                        document.getElementById("box4").onclick = function () {
                            gameover();
                        }
                        document.getElementById("box1").onclick = function () {
                            gameover();
                        }
                    }
                    if (q4 == 3) {
                        document.getElementById("box4").innerHTML = q1 * q2;
                        document.getElementById("box2").innerHTML = Math.round(Math.random() * 20);
                        document.getElementById("box3").innerHTML = Math.round(Math.random() * 20);
                        document.getElementById("box1").innerHTML = Math.round(Math.random() * 20);
                        document.getElementById("box4").onclick = function () {
                            printquestion();
                        }
                        document.getElementById("box2").onclick = function () {
                            gameover();
                        }
                        document.getElementById("box3").onclick = function () {
                            gameover();
                        }
                        document.getElementById("box1").onclick = function () {
                            gameover();
                        }
                    }
                }
                if (q3 == 3) {
                    document.getElementById("question").innerHTML = q1 + "/" + q2;
                    var a1 = Math.round(Math.random() * 20);
                    var a2 = Math.round(Math.random() * 20);
                    var a3 = Math.round(Math.random() * 20);
                    if (q4 == 0) {
                        var q1x = q1 / q2
                        document.getElementById("box1").innerHTML = q1x.toFixed(2);
                        document.getElementById("box2").innerHTML = a1.toFixed(2);
                        document.getElementById("box3").innerHTML = a2.toFixed(2);
                        document.getElementById("box4").innerHTML = a3.toFixed(2);
                        document.getElementById("box1").onclick = function () {
                            printquestion();
                        }
                        document.getElementById("box2").onclick = function () {
                            gameover();
                        }
                        document.getElementById("box3").onclick = function () {
                            gameover();
                        }
                        document.getElementById("box4").onclick = function () {
                            gameover();
                        }
                    }
                    if (q4 == 1) {
                        var q1x = q1 / q2
                        a1 = Math.random()*20;
                        a2 = Math.random()*20;
                        a3 = Math.random()*20;
                        document.getElementById("box2").innerHTML = q1x.toFixed(2);
                        document.getElementById("box1").innerHTML = a1.toFixed(2);
                        document.getElementById("box3").innerHTML = a2.toFixed(2);
                        document.getElementById("box4").innerHTML = a3.toFixed(2);
                        document.getElementById("box2").onclick = function () {
                            printquestion();
                        }
                        document.getElementById("box4").onclick = function () {
                            gameover();
                        }
                        document.getElementById("box3").onclick = function () {
                            gameover();
                        }
                        document.getElementById("box1").onclick = function () {
                            gameover();
                        }
                    }
                    if (q4 == 2) {
                        a1 = Math.random()*20;
                        a2 = Math.random()*20;
                        a3 = Math.random()*20;
                        var q1x = q1 / q2
                        document.getElementById("box3").innerHTML = q1x.toFixed(2);
                        document.getElementById("box2").innerHTML = a1.toFixed(2);
                        document.getElementById("box1").innerHTML = a2.toFixed(2);
                        document.getElementById("box4").innerHTML = a3.toFixed(2);
                        document.getElementById("box3").onclick = function () {
                            printquestion();
                        }
                        document.getElementById("box2").onclick = function () {
                            gameover();
                        }
                        document.getElementById("box4").onclick = function () {
                            gameover();
                        }
                        document.getElementById("box1").onclick = function () {
                            gameover();
                        }
                    }
                    if (q4 == 3) {
                        a1 = Math.random()*20;
                        a2 = Math.random()*20;
                        a3 = Math.random()*20;
                        var q1x = q1 / q2
                        document.getElementById("box4").innerHTML = q1x.toFixed(2);
                        document.getElementById("box2").innerHTML = a1.toFixed(2);
                        document.getElementById("box3").innerHTML = a2.toFixed(2);
                        document.getElementById("box1").innerHTML = a3.toFixed(2);
                        document.getElementById("box4").onclick = function () {
                            printquestion();
                        }
                        document.getElementById("box2").onclick = function () {
                            gameover();
                        }
                        document.getElementById("box3").onclick = function () {
                            gameover();
                        }
                        document.getElementById("box1").onclick = function () {
                            gameover();
                        }
                    }
                }
            }
        }
        function gameover() {
            clearInterval(count);
            document.getElementById("question").innerHTML = "Game Over </br> Your Score is : " + score;
            document.getElementById("question").style.fontSize = "4rem";
            document.getElementById("instruction").style.display = "none";
            document.getElementById("box1").style.display = "none";
            document.getElementById("box2").style.display = "none";
            document.getElementById("box3").style.display = "none";
            document.getElementById("box4").style.display = "none";
            document.getElementById("boxes").style.display = "none";
        }
    }