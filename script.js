let score = 0;
function globalScore (){
      
    document.getElementById("pnt").innerHTML = "Rs."+ score ; 
}
var dashQues;
dashQues = document.getElementById("quk")
var dashOpt1;
dashOpt1 = document.getElementById("optionOne");
var dashOpt2;
dashOpt2 = document.getElementById("optionTwo");
var dashOpt3;
dashOpt3 = document.getElementById("optionThree");
var dashOpt4;
dashOpt4 = document.getElementById("optionFour");
var n = 0;
function nextQue() {
    
    if (n < myQues.length) {
        n++;
        return callBoth();
    } else {
        
        return n = 0;
        
    }


}
function genrateQues() {


    let opt = myQues[n].answers;

    dashQues.innerHTML = myQues[n].question;
    dashOpt1.innerHTML = opt.a;
    dashOpt2.innerHTML = opt.b;
    dashOpt3.innerHTML = opt.c;
    dashOpt4.innerHTML = opt.d;


}

function myFun() {

    return document.querySelector(".quesPaper").style.display = 'block';

};
function callBoth() {
    genrateQues();
    myFun();



    dashOpt1.style.backgroundColor = "#fff";
    dashOpt2.style.backgroundColor = "#fff";
    dashOpt3.style.backgroundColor = "#fff";
    dashOpt4.style.backgroundColor = "#fff";
}
function scanAns(id) {



    switch (id) {
        case id = dashOpt1:
            dashOpt1.style.backgroundColor = "yellow";

            setTimeout(scan, 1000);
            function scan() {
                let opt = myQues[n].answers;

                if (myQues[n].trueAns == 'a') {
                    score += 1000;
                    globalScore();
                    
                    return dashOpt1.style.backgroundColor = "green";

                }
                else {
                    score -= 500;
                    
                    globalScore();
                    return dashOpt1.style.backgroundColor = "red";
                }

            };


            break;
        case id = dashOpt2:
            dashOpt2.style.backgroundColor = "yellow";

            setTimeout(scan2, 1000);
            function scan2() {
                let opt = myQues[n].answers;

                if (myQues[n].trueAns == 'b') {
                    score += 1000;
                    globalScore();
                    
                    return dashOpt2.style.backgroundColor = "green";

                }
                else {
                    score -= 500;
                    globalScore();
                    
                    return dashOpt2.style.backgroundColor = "red";
                }

            };

            break;
        case id = dashOpt3:
            dashOpt3.style.backgroundColor = "yellow";

            setTimeout(scan3, 1000);
            function scan3() {
                let opt = myQues[n].answers;

                if (myQues[n].trueAns == 'c') {
                    score += 1000;
                    globalScore();
                    
                    return dashOpt3.style.backgroundColor = "green";

                }
                else {
                    score -= 500;
                    globalScore();
                    return dashOpt3.style.backgroundColor = "red";
                }

            };

            break;
        case id = dashOpt4:
            dashOpt4.style.backgroundColor = "yellow";
            setTimeout(scan4, 1000);
            function scan4() {
                let opt = myQues[n].answers;

                if (myQues[n].trueAns == 'd') {
                    score += 1000;
                    globalScore();
                    
                    return dashOpt4.style.backgroundColor = "green";

                }
                else {
                    score -= 500;
                    globalScore();
                    return dashOpt4.style.backgroundColor = "red";
                };

            };


    };


};