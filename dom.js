//FIELDS
//var registrationField = document.querySelector("#registration_field");
var selectEmployeeName = document.querySelector(".selectEmployeeName");
var selectEmployeeInfo = document.querySelector(".selectEmployeeInfo");
var checkinBtn = document.querySelector(".checkin");
var checkoutBtn = document.querySelector(".checkout");
var infoBtn = document.querySelector(".info")

var arrivalWeekday = document.querySelector(".arrivalWeekday")
var arrivalDate = document.querySelector(".arrivalDate")
var arrivalTime = document.querySelector(".arrivalTime")

//var departWeekday = document.querySelector(".departWeekday")
var departDate = document.querySelector(".departDate")
var departTime = document.querySelector(".departTime")

var resetBtn = document.querySelector(".reset")
var h1 = document.getElementsByTagName('h1')[1]
var seconds = 0
var minutes = 0
var hours = 0
var t;
var theTimer = document.querySelector(".theTimer")
var deletePoint = document.querySelector(".employeeTemplateInsertPoint")
//BUTTONS
//var generateButton = document.querySelector("#generate_button");
//INNERHTML
//var errorReturn = document.querySelector("#error_return");
// LOCAL STORAGE
//var localStorageExtraction = JSON.parse(localStorage.getItem("regsPassed"))
//GLOBAL VARIABLES
var factoryInstanceOne = checkinFactory()
var templater = templateFactory()



function checkin(){
    {
    function add() {
        seconds++;
        if (seconds >= 60) {
            seconds = 0;
            minutes++;
            if (minutes >= 60) {
                minutes = 0;
                hours++;
            }
        }
        
        h1.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);
    
        timer();
    }
    function timer() {
        t = setTimeout(add, 1000);
    }
    timer();
}

console.log(selectEmployeeName.value)
console.log(arrivalWeekday.value)
console.log(arrivalDate.value)
console.log(arrivalTime.value)


templater.employeeTemplater(factoryInstanceOne.captureCheckin(selectEmployeeName.value, arrivalWeekday.value, arrivalDate.value, arrivalTime.value));
//console.log(factoryInstanceOne.captureCheckin(selectEmployeeName.value, arrivalWeekday.value, arrivalDate.value, arrivalTime.value))
//console.log(factoryInstanceOne.timeConversion(arrivalDate.value, arrivalTime.value))
// console.log(selectEmployeeName.value)
// console.log(startDate)
}

function checkout(){

    var timerAmount = String(document.querySelector(".theTimer").innerHTML);
    templater.employeeTemplater(factoryInstanceOne.captureCheckout(selectEmployeeName.value, arrivalWeekday.value, arrivalDate.value, arrivalTime.value, departTime.value, timerAmount))
    clearTimeout(t)
    h1.textContent = "00:00:00";
    seconds = 0; minutes = 0; hours = 0;
    return true;
}




function info(){

   return templater.employeeTemplater(factoryInstanceOne.info(selectEmployeeInfo.value))
}

function reset(){
    // h1.textContent = "00:00:00";
    // seconds = 0; minutes = 0; hours = 0;
   
    while (deletePoint.hasChildNodes()) {
        deletePoint.removeChild(deletePoint.firstChild);
      }
}

//UTILITY
{

    
    
    /* Start button */
    //start.onclick = timer;
    
    /* Stop button */
    // stop.onclick = function() {
    //     clearTimeout(t);
    // }
    
    /* Clear button */
    // clear.onclick = function() {
    //     h1.textContent = "00:00:00";
    //     seconds = 0; minutes = 0; hours = 0;
    // }
}


checkinBtn.addEventListener('click', checkin);
checkoutBtn.addEventListener('click', checkout)
infoBtn.addEventListener('click', info)
resetBtn.addEventListener('click', reset)