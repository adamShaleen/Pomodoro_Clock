$(document).ready(function() {

    // Defaults===========================================
    $("#breakTimer").hide();

    var breakTime = 5;
    var sessionTime = 25;
    var seconds = 0;
    var minutes;
    var countdownInterval;

    $("#breakDisplay").html(breakTime);
    $("#sessionDisplay").html(sessionTime);
    $("#sessionTimerDisplay").html(sessionTime + ":00");
    //=====================================================

    // Add/Subtract Controls===============================
    $("#breakSubtract").click(function() {
        if (breakTime !== 1) {
            breakTime--;
            $("#breakDisplay").html(breakTime);
            $("#breakTimerDisplay").html(breakTime + ":00");
        }
    });

    $("#breakAdd").click(function() {
        if (breakTime !== 15) {
            breakTime++;
            $("#breakDisplay").html(breakTime);
            $("#breakTimerDisplay").html(breakTime + ":00");
        }
    });

    $("#sessionSubtract").click(function() {
        if (sessionTime !== 15) {
            sessionTime--;
            $("#sessionDisplay").html(sessionTime);
            $("#sessionTimerDisplay").html(sessionTime + ":00");
        }
    });

    $("#sessionAdd").click(function() {
        if (sessionTime !== 60) {
            sessionTime++;
            $("#sessionDisplay").html(sessionTime);
            $("#sessionTimerDisplay").html(sessionTime + ":00");
        }
    });
    //======================================================

    // Toggle Timer Mode====================================
    $("#sessionSwitch").click(function() {
        $("#sessionTimer").hide();
        $("#breakTimer").show();
    });

    $("#breakSwitch").click(function() {
        $("#breakTimer").hide();
        $("#sessionTimer").show();
    });
    //======================================================

    //Timer countdown=======================================
    $("#sessionTimerStartButton").click(function() {
        countdown();
    });

    $("#sessionTimerStopButton").click(function() {
        clearInterval(countdownInterval);
        sessionTime = minutes;
    });

    $("#breakTimerStartButton").click(function() {
        countdown();
    });

    $("#breakTimerStopButton").click(function() {
        clearInterval(countdownInterval);
        breakTime = minutes;
    });

    function countdown() {

        var sessionVisible = $("#sessionTimer").is(":visible");
        minutes = sessionVisible ? sessionTime : breakTime;

        countdownInterval = setInterval(function() {

            if (seconds === 0 && minutes === 0) {
                clearInterval(countdownInterval);
                sessionVisible ? $("#sessionTimerDisplay").html("END") : $("#breakTimerDisplay").html("END");
                return;
            }

            if (seconds === 0 && minutes !== 0) {
                seconds = 60;
                minutes--;
            }

            if (seconds === 0 && minutes === 1) {
                minutes = 0;
            }

            seconds--;
            sessionVisible ? $("#sessionTimerDisplay").html(minutes + ":" + (seconds < 10 ? "0" + seconds : seconds)) : $("#breakTimerDisplay").html(minutes + ":" + (seconds < 10 ? "0" + seconds : seconds));

        }, 1000);
    }

});
