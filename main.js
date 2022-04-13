prediction1 = "";


Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 100
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapchat(){
    Webcam.snap(function(data_uri) {
        document.getElementById("cap_img").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version:', ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/1dUG5_xPo/model.json", modelLoaded);

function modelLoaded(){
    console.log("model is loaded!");
}

function identify(){
    img = document.getElementById("capturedImage");
    classifier.classify(img, gotResults);
}

function speak(){
    var synth = window.speechSynthesis;
    speachdata1 = "First prediction is" + prediction1;
    var utterThis = new SpeechSynthesisUtterance(speechdata1);
    synth.speak(utterThis);
}

function gotResults(error, results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        document.getElementById("result").innerHTML = results[0].label;
 
        prediction1 = results[0].label;
        console.log(prediction1);

        if(prediction1 == "class1"){
            document.getElementenById("result").innerHTML = "&#128512;";
        }

        if(prediction1 == "class2"){
            document.getElementById("result").innerHTML = "&#128532;";
        }

        if(prediction1 == "class3"){
            document.getElementById("result").innerHTML = "&#128545;";
        }
    }
}


