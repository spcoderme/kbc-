
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


/*const n = (function () {
    let counter = 0;
    return function () {counter += 1; return counter;}
  })();
  we should try this counter variable*/
  



function genrateQues() {


    do {
        n = 0;
        let opt = myQues[n].answers;

        

        dashQues.innerHTML = myQues[n].question;
        dashOpt1.innerHTML = opt.a;
        dashOpt2.innerHTML = opt.b;
        dashOpt3.innerHTML = opt.c;
        dashOpt4.innerHTML = opt.d;

        function scanAns() {
        
    

            switch (id) {
                case id = dashOpt1:
                    dashOpt1.style.backgroundColor = "yellow";
        
                    setTimeout(scan, 3000);
                    function scan() {
                        let opt = myQues[n].answers;
        
                        if (opt.trueAns == "a") {
                            return dashOpt1.style.backgroundColor = "green";
        
                        }
                        else {
                            return dashOpt1.style.backgroundColor = "red";
                        }
        
                    };
        
        
                    break;
                case id = dashOpt2:
                    dashOpt2.style.backgroundColor = "yellow";
        
                    setTimeout(scan2, 3000);
                    function scan2() {
                        let opt = myQues[n].answers;
        
                        if (opt.trueAns == "b") {
                            return dashOpt2.style.backgroundColor = "green";
        
                        }
                        else {
                            return dashOpt2.style.backgroundColor = "red";
                        }
        
                    };
        
                    break;
                case id = dashOpt3:
                    dashOpt3.style.backgroundColor = "yellow";
        
                    setTimeout(scan3, 3000);
                    function scan3() {
                        let opt = myQues[n].answers;
        
                        if (opt.trueAns == "c") {
                            return dashOpt3.style.backgroundColor = "green";
        
                        }
                        else {
                            return dashOpt3.style.backgroundColor = "red";
                        }
        
                    };
        
                    break;
                case id = dashOpt4:
                    dashOpt4.style.backgroundColor = "yellow";
                    setTimeout(scan4, 3000);
                    function scan4() {
                        let opt = myQues[n].answers;
        
                        if (opt.trueAns == "d") {
                            return dashOpt4.style.backgroundColor = "green";
        
                        }
                        else {
                            return dashOpt4.style.backgroundColor = "red";
                        };
        
                    };
        
        
            }
        };
                 
        n++;


        



        /*var dashQues;
        dashQues = document.getElementById("quk")
        var dashOpt1;
        dashOpt1 = document.getElementById("optionOne");
        var dashOpt2;
        dashOpt2 = document.getElementById("optionTwo");
        var dashOpt3;
        dashOpt3 = document.getElementById("optionThree");
        var dashOpt4;
        dashOpt4 = document.getElementById("optionFour");
        dashOpt1,dashOpt2,dashOpt3,dashOpt4*/
    } while (n > 15)
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