//Random number from the length of the array
function arrayLength() {
document.getElementById("generateArrayNum").innerHTML = "Array Length: " +arrayTips.length;
}
function arrayLastGen() {
document.getElementById("generateLastTip").innerHTML = "Last Tip of the list: " + arrayTips[arrayTips.length - 1].tip;
}

var arrayTips = [
{"tip":"Design every page as a landing page."},
{"tip":"Make appealing form buttons"},
{"tip":"Learn how to use google"},
 {"tip":"Dry = Don't Repeat Yourself"}
];


// Math.random() => random decimal number.
//Math.floor(1.6) => 6. The method rounds downward
function randomNumber() {
var result = Math.floor((Math.random()*10) +1);
document.getElementById("random").innerHTML = result;

}

function randomNumber20() {
var result20 = Math.floor((Math.random()*20) +1);
document.getElementById("random20").innerHTML = result20;

}


var tipsDemo1 = 
'{"tip1":"tip1 lorem","tip2":"tip2 ipsum","tip3":"tip3 ipsum ipsum"}';

var obj = JSON.parse(tipsDemo1);

document.getElementById("demo1").innerHTML =
obj.tip1 + "<br>" +
obj.tip2 + "<br>" +
obj.tip3;

var tipsDemo2 = [
{"tip":"Design every page as a landing page."},
{"tip":"Make appealing form buttons"},
{"tip":"Learn how to use google"}
];

document.getElementById("demo2").innerHTML = "Tip 1: " + tipsDemo2[0].tip + "<br>" +
"Tip 2: " + tipsDemo2[1].tip + "<br>" +
"Tip 3: " + tipsDemo2[2].tip + "<br>";