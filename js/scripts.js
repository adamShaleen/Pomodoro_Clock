$(document).ready(function() {

    // Defaults===========================================
    $("#breakTimerContainer").hide();

    var breakMinutes = 5;
    var breakSeconds = 0;
    var breakInterval;
    var sessionMinutes = 25;
    var sessionSeconds = 0;
    var sessionInterval;

    $("#breakDisplay").html(breakMinutes);
    $("#sessionDisplay").html(sessionMinutes);
    $("#sessionTimerDisplay").html(sessionMinutes + ":" + (sessionSeconds < 10 ? "0" + sessionSeconds : sessionSeconds));
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
        sessionInterval = setInterval(function() {
            var sessionTime = sessionCountDown(sessionMinutes, sessionSeconds);
            $("#sessionTimerDisplay").html(sessionTime);
        }, 1000);
    });

    $("#sessionTimerStopButton").click(function() {
        clearInterval(sessionInterval);
    });

    $("#breakTimerStartButton").click(function() {
        breakInterval = setInterval(function() {
            var breakTime = breakCountDown(breakMinutes, breakSeconds);
            $("#breakTimerDisplay").html(breakTime);
        }, 1000);
    });

    $("#breakTimerStopButton").click(function() {
        clearInterval(breakInterval);
    });


    function sessionCountDown(minutes, seconds) {

        if (seconds === 0 && minutes > 0) {
            seconds = 60;
            minutes--;
        }

        if (seconds === 0 && minutes === 0) {
            return "END";
        }

        seconds--;

        sessionMinutes = minutes;
        sessionSeconds = seconds;

        return minutes + ":" + (seconds < 10 ? "0" + seconds : seconds);
    }

    function breakCountDown(minutes, seconds) {

        if (seconds === 0 && minutes > 0) {
            seconds = 60;
            minutes--;
        }

        if (seconds === 0 && minutes === 0) {
            return "END";
        }

        seconds--;

        breakMinutes = minutes;
        breakSeconds = seconds;

        return minutes + ":" + (seconds < 10 ? "0" + seconds : seconds);
    }

});
