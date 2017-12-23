$(document).ready(function() {

    // Defaults===========================================
    $("#break-timer").hide();

    var breakTime = 5;
    var sessionTime = 25;

    $("#breakDisplay").html(breakTime);
    $("#sessionDisplay").html(sessionTime);
    $("#session-timer-display").html(sessionTime + ":00");
    //=====================================================

    // Add/Subtract Controls===============================
    $("#breakSubtract").click(function() {
        if (breakTime !== 0) {
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
});
