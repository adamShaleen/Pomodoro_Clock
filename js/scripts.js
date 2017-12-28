$(document).ready(function() {

    // Defaults===========================================
    $("#break-timer").hide();

    var breakTime = 5;
    var sessionTime = 25;
    var seconds = 0;
    var minutes;
    var countdownInterval;

    $("#breakDisplay").html(breakTime);
    $("#sessionDisplay").html(sessionTime);
    $("#session-timer-display").html(sessionTime + ":00");
    //=====================================================

    // Add/Subtract Controls===============================
    $("#breakSubtract").click(function() {
        if (breakTime !== 1) {
            breakTime--;
            $("#breakDisplay").html(breakTime);
            $("#break-timer-display").html(breakTime + ":00");
        }
    });

    $("#breakAdd").click(function() {
        if (breakTime !== 15) {
            breakTime++;
            $("#breakDisplay").html(breakTime);
            $("#break-timer-display").html(breakTime + ":00");
        }
    });

    $("#sessionSubtract").click(function() {
        if (sessionTime !== 15) {
            sessionTime--;
            $("#sessionDisplay").html(sessionTime);
            $("#session-timer-display").html(sessionTime + ":00");
        }
    });

    $("#sessionAdd").click(function() {
        if (sessionTime !== 60) {
            sessionTime++;
            $("#sessionDisplay").html(sessionTime);
            $("#session-timer-display").html(sessionTime + ":00");
        }
    });
    //======================================================

    // Toggle Timer Mode====================================
    $("#sessionSwitch").click(function() {
        $("#session-timer").hide();
        $("#break-timer").show();
    });

    $("#breakSwitch").click(function() {
        $("#break-timer").hide();
        $("#session-timer").show();
    });
    //======================================================

    //Timer countdown=======================================
    $("#session-timer-start-button").click(function() {
        countdown();
    });

    $("#session-timer-stop-button").click(function() {
        clearInterval(countdownInterval);
        sessionTime = minutes;
    });

    $("#break-timer-start-button").click(function() {
        countdown();
    });

    $("#break-timer-stop-button").click(function() {
        clearInterval(countdownInterval);
        breakTime = minutes;
    });

    function countdown() {

        var sessionVisible = $("#session-timer").is(":visible");
        minutes = sessionVisible ? sessionTime : breakTime;

        countdownInterval = setInterval(function() {

            if (seconds === 0 && minutes === 0) {
                clearInterval(countdownInterval);
                sessionVisible ? $("#session-timer-display").html("END") : $("#break-timer-display").html("END");
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
            sessionVisible ? $("#session-timer-display").html(minutes + ":" + (seconds < 10 ? "0" + seconds : seconds)) : $("#break-timer-display").html(minutes + ":" + (seconds < 10 ? "0" + seconds : seconds));

        }, 1000);
    }

});
