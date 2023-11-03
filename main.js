var speechrecognition = window.webkitSpeechRecognition;
var content
recognition  = new speechrecognition();

function start()
{
    recognition.start();
}
recognition.onresult = function(event){
    console.log(event);
    content = event.results[0][0].transcript.toLowerCase();
    console.log(content);
    if (content =="take my selfie"){
        console.log("taking selfie --- ")
        speak();
    }
    
}

function speak()
{
    var synth = window.speechSynthesis;
    speak_data = "Taking your selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(function()
    {
        img_id = "Selfie_1"
take_snapshot();
speak_data = "Taking you selfie in 10 seconds"
var utterThis = new SpeechSynthesisUtterance(speak_data);
synth.speak(utterThis);
    }, 5000);

    setTimeout(function()
    {
        img_id = "Selfie_2"
take_snapshot();
speak_data = "Taking you selfie in 15 seconds"
var utterThis = new SpeechSynthesisUtterance(speak_data);
synth.speak(utterThis);
    }, 10000);

    setTimeout(function()
    {
        img_id = "Selfie_3"
take_snapshot();
    }, 15000);
}

camera = document.getElementById("camera")
Webcam.set({
    width: 500,
    height: 450,
    image_format: 'png',
    image_quality: 110
});

function take_snapshot()
{
    Webcam.snap(function(data_url) {
        if (img_id == "Selfie_1")
        {
            document.getElementById("result1").innerHTML = '<img id="Selfie_1" src=" '+data_url+'"/>';
        }
        
        if (img_id == "Selfie_2")
        {
            document.getElementById("result2").innerHTML = '<img id="Selfie_2" src=" '+data_url+'"/>';
        }

        if (img_id == "Selfie_3")
        {
            document.getElementById("result3").innerHTML = '<img id="Selfie_3" src=" '+data_url+'"/>';
        }
    })
}

