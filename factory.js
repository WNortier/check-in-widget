

function checkinFactory() {
    //console.log(warwick)
    var theCorrectObject

    function timeConversion(checkinDate, checkinTime, checkinDate, checkoutTime) {

        var startDate = new Date(String(checkinDate + ", " + checkinTime))
        var endDate = new Date(String(checkinDate + ", " + checkoutTime))
        //var endDate = new Date("24 August 2019, 11:13"); 
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

    function captureCheckin(name, day, date, arrivalTime) {

        if (name.toLowerCase().startsWith("w")) {
            theCorrectObject = warwickObject
        }
        else if (name.toLowerCase().startsWith("s")) {
            theCorrectObject = sinoObject
        }
        else if (name.toLowerCase().startsWith("j")) {
            theCorrectObject = jasonObject
        }
        else if (name.toLowerCase().startsWith("v")) {
            theCorrectObject = victorObject
        }
        else if (name.toLowerCase().startsWith("m")) {
            theCorrectObject = melissaObject
        }

        for (var i in theCorrectObject) {
            var entry = theCorrectObject[i];
            if (entry.day == day) {
                entry.date = date
                entry.check_in = arrivalTime
            }
        }
        return theCorrectObject;
    }

    function captureCheckout(name, arrivalDay, arrivalDate, arrivalTime, departTime, timerAmount) {

        if (name.toLowerCase().startsWith("w")) {
            theCorrectObject = warwickObject
        }
        else if (name.toLowerCase().startsWith("s")) {
            theCorrectObject = sinoObject
        }
        else if (name.toLowerCase().startsWith("j")) {
            theCorrectObject = jasonObject
        }
        else if (name.toLowerCase().startsWith("v")) {
            theCorrectObject = victorObject
        }
        else if (name.toLowerCase().startsWith("m")) {
            theCorrectObject = melissaObject
        }


        for (var i in theCorrectObject) {
            var entry = theCorrectObject[i];
            if (entry.day == arrivalDay) {
                entry.check_out = departTime
                entry.time_worked = timeConversion(arrivalDate, arrivalTime, arrivalDate, departTime)
                entry.timer_value = timerAmount
            }
        }
       return theCorrectObject
    }

function info(name) {
    if (name.toLowerCase().startsWith("w")) {
        theCorrectObject = warwickObject
    }
    else if (name.toLowerCase().startsWith("s")) {
        theCorrectObject = sinoObject
    }
    else if (name.toLowerCase().startsWith("j")) {
        theCorrectObject = jasonObject
    }
    else if (name.toLowerCase().startsWith("v")) {
        theCorrectObject = victorObject
    }
    else if (name.toLowerCase().startsWith("m")) {
        theCorrectObject = melissaObject
    }
    return theCorrectObject
}

    return {
        timeConversion,
        captureCheckin,
        captureCheckout,
        info
    }
}