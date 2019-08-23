//FIELDS
//var registrationField = document.querySelector("#registration_field");
var selectEmployeeName = document.querySelector(".selectEmployeeName");
var checkinBtn = document.querySelector(".checkin");
var checkoutBtn = document.querySelector(".checkout");
var infoBtn = document.querySelector(".info")
var currentWeekday = document.querySelector(".currentWeekday")
var todaysDate = document.querySelector(".todaysDate")
var todaysTime = document.querySelector(".todaysTime")
var resetBtn = document.querySelector(".reset")
var h1 = document.getElementsByTagName('h1')[1]
var seconds = 0
var minutes = 0
var hours = 0
var t;
var theTimer = document.querySelector(".theTimer")


todaysDate
//BUTTONS
//var generateButton = document.querySelector("#generate_button");
//INNERHTML
//var errorReturn = document.querySelector("#error_return");
// LOCAL STORAGE
//var localStorageExtraction = JSON.parse(localStorage.getItem("regsPassed"))
//GLOBAL VARIABLES
var factoryInstanceOne = checkinFactory()



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
    factoryInstanceOne.timeConversion(todaysDate.value, todaysTime.value)
    console.log(factoryInstanceOne.timeConversion(todaysDate.value, todaysTime.value))
    console.log(document.querySelector(".theTimer").innerHTML)
    // console.log(selectEmployeeName.value)
    // console.log(startDate)
}



function checkout(){
    clearTimeout(t)
    //alert("works")
    return true
}

function info(){
    alert("works")
    return true
}

function reset(){
    h1.textContent = "00:00:00";
    seconds = 0; minutes = 0; hours = 0;
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