let Warwick = [{
    "Name": "Warwick",
    "Day": "sneaker",
    "Check-in": "Date",
    "Check-out": "Date",
    "Time-worked": 3
},
{
    "Name": "Warwick",
    "Day": "sneaker",
    "Check-in": "Date",
    "Check-out": "Date",
    "Time-worked": 3
},
{
    "Name": "Warwick",
    "Day": "sneaker",
    "Check-in": "Date",
    "Check-out": "Date",
    "Time-worked": 3
},
{
    "Name": "Warwick",
    "Day": "sneaker",
    "Check-in": "Date",
    "Check-out": "Date",
    "Time-worked": 3
},
{
    "Name": "Warwick",
    "Day": "sneaker",
    "Check-in": "Date",
    "Check-out": "Date",
    "Time-worked": 3
}]


function checkinFactory() {


    function timeConversion(date, time) {

        var startDate = new Date(String(date + ", " + time)) 

        var endDate = new Date("24 August 2019, 11:13"); 
        var diff = Math.abs(startDate.getTime() - endDate.getTime())


        var seconds = (diff / 1000).toFixed(1);

        var minutes = (diff / (1000 * 60)).toFixed(1);

        var hours = (diff / (1000 * 60 * 60)).toFixed(1);

        var days = (diff / (1000 * 60 * 60 * 24)).toFixed(1);

        if (seconds < 60) {
            return seconds + " Sec";
        } else if (minutes < 60) {
            return minutes + " Min";
        } else if (hours < 24) {
            return hours + " Hrs";
        } else {
            return days + " Days"
        }
    }

    

    // console.log(timeConversion(diff))



return {
    timeConversion
}
}