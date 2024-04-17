document.addEventListener("DOMContentLoaded", function () {
    let timer;
    let alarmSound = document.getElementById("alarmSound");

    document.getElementById("startBtn").addEventListener("click", function () {
        let minutes = parseInt(document.getElementById("minutes").value);
        let seconds = parseInt(document.getElementById("seconds").value);

        if (isNaN(minutes) || isNaN(seconds)) {
            alert("Vui lòng nhập số phút và giây!");
            return;
        }

        let totalTime = (minutes * 60) + seconds;

        if (totalTime <= 0) {
            alert("Thời gian không hợp lệ!");
            return;
        }

        timer = setInterval(function () {
            totalTime--;
            let displayMinutes = Math.floor(totalTime / 60);
            let displaySeconds = totalTime % 60;

            document.getElementById("minutes").value = displayMinutes;
            document.getElementById("seconds").value = displaySeconds;

            if (totalTime <= 0) {
                clearInterval(timer);
                alarmSound.play();
                alert("Hết giờ!");
            }
        }, 1000);
    });

    document.getElementById("resetBtn").addEventListener("click", function () {
        clearInterval(timer);
        document.getElementById("minutes").value = "";
        document.getElementById("seconds").value = "";
        alarmSound.pause();
        alarmSound.currentTime = 0;
    });
});