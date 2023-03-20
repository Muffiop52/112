prediction_1 = ""
prediction_2 = ""

Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_qulity:90
});

camera = document.getElementById("camera");
 function take_snapshot()
 {
    webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="capture_image" src="'+data_uri+'">';

    });

 }

 console.log('ml5 version:',ml5.version);
 classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/5nHpu3om3/model.json',modelLoaded);

 function modelLoaded(){
    console.log('model_loaded');
 }

function speak(){
    var synth = window.speechSynthesis;
    speak_data_1 = "The First Prediction Is :" + prediction_1;
    speak_data_2 = "The Second Prediction Is :" + prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
    ś

}
 
