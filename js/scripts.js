$(document).ready(function() {

    // Defaults
    var breakTime = 5;
    var sessionTime = 25;

    $("#breakDisplay").html(breakTime);
    $("#sessionDisplay").html(sessionTime);

    $("#breakSubtract").click(function() {
        if (breakTime !== 0) {
            breakTime--;
            $("#breakDisplay").html(breakTime);
        }
    });

    $("#breakAdd").click(function() {
        if (breakTime !== 15) {
            breakTime++;
            $("#breakDisplay").html(breakTime);
        }
    });

    $("#sessionSubtract").click(function() {
        if (sessionTime !== 15) {
            sessionTime--;
            $("#sessionDisplay").html(sessionTime);
        }
    });

    $("#sessionAdd").click(function() {
        if (sessionTime !== 60) {
            sessionTime++;
            $("#sessionDisplay").html(sessionTime);
        }
    });
});
