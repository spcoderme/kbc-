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

var n = Math.floor(Math.random() * 15);





function genrateQues() {
    var n = Math.floor(Math.random() * 15);

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


function scanAns(id) {
    let opt = myQues[n];
    function scan() {


        if (opt.trueAns == "a" ) {
            return dashOpt1.style.backgroundColor = "green";

        }
        else {
            return dashOpt1.style.backgroundColor = "red";
        }

    };
    switch (id) {
        case id = dashOpt1:
            dashOpt1.style.backgroundColor = "yellow";

            setTimeout(scan, 3000);


            break;
        case id = dashOpt2:
            dashOpt2.style.backgroundColor = "yellow";

            setTimeout(scan, 3000);


            break;
        case id = dashOpt3:
            dashOpt3.style.backgroundColor = "yellow";

            setTimeout(scan, 3000);


            break;
        case id = dashOpt4:
            dashOpt4.style.backgroundColor = "yellow";
            setTimeout(scan, 3000);



            break;

    }



}

