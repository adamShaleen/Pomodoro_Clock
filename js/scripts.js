$(document).ready(function() {

    // Alarm===============================================
    var alarm = document.createElement("audio");
    alarm.setAttribute("src", "http://onlineclock.net/audio/options/default.mp3");

    // Page Load Defaults==================================
    $("#breakTimerContainer").hide();

    var breakMinutes = 5;
    var breakSeconds = 0;
    var breakInterval;
    var sessionMinutes = 25;
    var sessionSeconds = 0;
    var sessionInterval;

    $("#breakDisplay").html(breakMinutes);
    $("#sessionDisplay").html(sessionMinutes);
    $("#sessionTimerDisplay").html(formatTimeStamp(new TimeStamp(sessionMinutes, sessionSeconds)));
    //=====================================================

    // Add/Subtract Controls===============================
    $("#breakSubtract").click(function() {
        if (breakMinutes !== 1) {
            breakMinutes--;
            breakSeconds = 0;
            $("#breakDisplay").html(breakMinutes);
            $("#breakTimerDisplay").html(breakMinutes + ":00");
        }
    });

    $("#breakAdd").click(function() {
        if (breakMinutes !== 15) {
            breakMinutes++;
            breakSeconds = 0;
            $("#breakDisplay").html(breakMinutes);
            $("#breakTimerDisplay").html(breakMinutes + ":00");
        }
    });

    $("#sessionSubtract").click(function() {
        if (sessionMinutes !== 15) {
            sessionMinutes--;
            sessionSeconds = 0;
            $("#sessionDisplay").html(sessionMinutes);
            $("#sessionTimerDisplay").html(sessionMinutes + ":00");
        }
    });

    $("#sessionAdd").click(function() {
        if (sessionMinutes !== 60) {
            sessionMinutes++;
            sessionSeconds = 0;
            $("#sessionDisplay").html(sessionMinutes);
            $("#sessionTimerDisplay").html(sessionMinutes + ":00");
        }
    });
    //======================================================

    // Toggle Timer Mode====================================
    $("#switchToBreakButton").click(function() {
        $("#sessionTimerContainer").hide();
        $("#breakTimerContainer").show();
    });

    $("#switchToSessionButton").click(function() {
        $("#breakTimerContainer").hide();
        $("#sessionTimerContainer").show();
    });
    //======================================================

    //Timer countdown=======================================
    $("#sessionTimerStartButton").click(function() {
        $("#tomatoTimer").addClass('spin');
        sessionInterval = setInterval(function() {
            var timeStamp = countDown(sessionMinutes, sessionSeconds);

            if (timeStamp.end) {
                clearInterval(sessionInterval);
                alarm.play();
                return;
            }

            sessionMinutes = timeStamp.minutes;
            sessionSeconds = timeStamp.seconds;
            $("#sessionTimerDisplay").html(formatTimeStamp(timeStamp));
        }, 1000);
    });

    $("#sessionTimerStopButton").click(function() {
        $("#tomatoTimer").removeClass('spin');
        clearInterval(sessionInterval);
    });

    $("#sessionTimerResetButton").click(function() {
        $("#tomatoTimer").removeClass('spin');
        clearInterval(sessionInterval);
        sessionMinutes = 25;
        sessionSeconds = 0;
        $("#sessionDisplay").html(sessionMinutes);
        $("#sessionTimerDisplay").html(formatTimeStamp(new TimeStamp(sessionMinutes, sessionSeconds)));
    });

    $("#breakTimerStartButton").click(function() {
        $("#tomatoTimer").addClass('spin');
        breakInterval = setInterval(function() {
            var timeStamp = countDown(breakMinutes, breakSeconds);

            if (timeStamp.end) {
                clearInterval(breakInterval);
                alarm.play();
                return;
            }

            breakMinutes = timeStamp.minutes;
            breakSeconds = timeStamp.seconds;
            $("#breakTimerDisplay").html(formatTimeStamp(timeStamp));
        }, 1000);
    });

    $("#breakTimerStopButton").click(function() {
        $("#tomatoTimer").removeClass('spin');
        clearInterval(breakInterval);
    });

    $("#breakTimerResetButton").click(function() {
        $("#tomatoTimer").removeClass('spin');
        clearInterval(breakInterval);
        breakMinutes = 5;
        breakSeconds = 0;
        $("#breakDisplay").html(breakMinutes);
        $("#breakTimerDisplay").html(formatTimeStamp(new TimeStamp(breakMinutes, breakSeconds)));
    });

    // Utilities ===========================================
    function countDown(minutes, seconds) {
        if (seconds === 0 && minutes > 0) {
            seconds = 60;
            minutes--;
        }

        if (minutes === 0 && seconds === "00") {
            var timeOver = new TimeStamp(minutes, seconds);
            timeOver.end = true;
            return timeOver;
        }

        seconds--;
        return new TimeStamp(minutes, seconds);
    }

    function formatTimeStamp(timeStamp) {
        return timeStamp.minutes + timeStamp.divider + timeStamp.seconds;
    }

    function TimeStamp(minutes, seconds) {
        this.minutes = minutes;
        this.divider = ":";
        this.seconds = (seconds < 10 ? "0" + seconds : seconds);
        this.end = false;
    }
});
