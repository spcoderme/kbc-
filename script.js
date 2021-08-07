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

function incre() {
    n = 0 && n <= 15;
    n++;
    ++n;
    myQues[n];
};




function genrateQues() {

    

    let opt = myQues[n].answers;
    // let op2 = myQues[n].answers.b;
    //let op3 = myQues[n].answers.c;
    //let op4 = myQues[n].answers.d;

    dashQues.innerHTML = myQues[n].question;
    dashOpt1.innerHTML = opt.a;
    dashOpt2.innerHTML = opt.b;
    dashOpt3.innerHTML = opt.c;
    dashOpt4.innerHTML = opt.d;
}

function myFun() {

    return document.querySelector(".quesPaper").style.display = 'block';

}
function callBoth() {
    genrateQues();
    myFun();
    incre();
    dashOpt1.style.backgroundColor = "#fff";
    dashOpt2.style.backgroundColor = "#fff";
    dashOpt3.style.backgroundColor = "#fff";
    dashOpt4.style.backgroundColor = "#fff";
}
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


function scanAns(chaeak) {
    let opt = myQues[n];

    switch (chaeak) {
        case chaeak = dashOpt1:
            dashOpt1.style.backgroundColor = "yellow";

            setTimeout(scan, 3000);
            function scan() {


                if (opt.trueAns === "a") {
                    return dashOpt1.style.backgroundColor = "green";

                }
                else {
                    return dashOpt1.style.backgroundColor = "red";
                }

            };


            break;
        case chaeak = dashOpt2:
            dashOpt2.style.backgroundColor = "yellow";

            setTimeout(scan2, 3000);
            function scan2() {


                if (opt.trueAns === "b") {
                    return dashOpt2.style.backgroundColor = "green";

                }
                else {
                    return dashOpt2.style.backgroundColor = "red";
                }

            };

            break;
        case chaeak = dashOpt3:
            dashOpt3.style.backgroundColor = "yellow";

            setTimeout(scan3, 3000);
            function scan3() {


                if (opt.trueAns === "c") {
                    return dashOpt3.style.backgroundColor = "green";

                }
                else {
                    return dashOpt3.style.backgroundColor = "red";
                }

            };

            break;
        case chaeak = dashOpt4:
            dashOpt4.style.backgroundColor = "yellow";
            setTimeout(scan4, 3000);
            function scan4() {


                if (opt.trueAns === "d") {
                    return dashOpt4.style.backgroundColor = "green";

                }
                else {
                    return dashOpt4.style.backgroundColor = "red";
                };

            };


            break;

    };



};

