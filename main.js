var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition(); 

function recordVoice()
{
    document.getElementById("textbox").innerHTML=""
    recognition.start();
}

recognition.onresult= function(event)
{
    console.log(event)
    var content=event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=content
    if(content=="selfie"){
        speak()
    }
}

Webcam.set({
width:360,
height:250,
image_format:'jpeg',
jpeg_quallity:100
})

camera = document.getElementById("camera");


function speak()
{
    var synth = window.speechSynthesis
    speakdata = "Taking your selfie in 5 seconds"
    var utterThis = new SpeechSynthesisUtterance(speakdata)
    synth.speak(utterThis)
    Webcam.attach('#camera')
    setTimeout(function(){
        img_id="selfie1"
        takeSnapshot();

    speak_data="taking your next selfie in ten seconds" 
    var utterThis = new SpeechSynthesisUtterance(speakdata)
    synth.speak(utterThis)
    },5000)
    setTimeout(function(){
        img_id="selfie2"
        takeSnapshot();

    speak_data="taking your next selfie in 15 seconds" 
    var utterThis = new SpeechSynthesisUtterance(speakdata)
    synth.speak(utterThis)
    },10000)

    setTimeout(function(){
        img_id="selfie3"
        takeSnapshot();

  
    },15000)

}

function takeSnapshot()
{
 Webcam.snap(function (image_uri){

    if (img_id =="selfie1"){
        document.getElementById("result1").innerHTML='<img id="selfie1" src="'+image_uri+'"> '
    }

    if (img_id =="selfie2"){
        document.getElementById("result2").innerHTML='<img id="selfie2" src="'+image_uri+'"> '
    }

    if (img_id =="selfie3"){
        document.getElementById("result3").innerHTML='<img id="selfie3" src="'+image_uri+'"> '
    }
    

 }

 )
}
function Save(){
    link=document.getElementById("link")
    image=document.getElementById("picture").src
    link.href=image
    link.click()
}