// Method 1:
// function voice() {
//     var recognition = new SpeechRecognition();
//     recognition.lang = "en-GB";
//     recognition.onresult = function (event) {
//         document.getElementById("speechArea").value = event.results[0][0].transcript;
//         console.log(event);
//     }
// }


// Method 2:
const speechBtn = document.getElementById("speechButton");
speechBtn.addEventListener("click", function () {

    window.SpeechRecognition = window.webkitSpeechRecognition;

    const recognition = new SpeechRecognition();
    // recognition.continous = true;
    recognition.lang = "en-US";
    recognition.iterimResults = true;
    // recognition.maxAlternatives = 1;

    recognition.addEventListener("result", function (event) {
        var speechArea = document.getElementById("span_1");
        var result = event.results[0][0].transcript;
        speechArea.textContent = result;

    });

    recognition.addEventListener("end", recognition.start);
    recognition.start();
});