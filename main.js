

function startclassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/FJrBijOJq/model.json',modelLoaded);
}

function modelLoaded(){
    classifier.classify(gotResult);
}

function gotResult(error,result){
    if (error){
   console.error(error);
    } else {
        console.log(result);
        r = Math.floor(Math.random() * 255)+ 1;
        g = Math.floor(Math.random() * 255)+ 1;
        b = Math.floor(Math.random() * 255)+ 1;
        document.getElementById("l_result").innerHTML = 'I can hear - '+result[0].label;
        document.getElementById("l_confidence").innerHTML = 'Accuracy - '+(result[0].confidence*100).toFixed(2)+"%";
        document.getElementById("l_result").style.color = "rgb("+r+","+g+","+b+")";
        document.getElementById("l_confidence").style.color = "rgb("+r+","+g+","+b+")";

        img1 = document.getElementById('alien1');
        img2 = document.getElementById('alien2');
        img3 = document.getElementById('alien3');
        img4 = document.getElementById('alien4');
        
        if (result[0].label == "clapping"){
          img1.src = 'aliens-01.gif';
          img2.src = 'aliens-02.png';
          img3.src = 'aliens-03.png';
          img4.src = 'aliens-04.png';
        } else if (result[0].label == "bell"){
            img1.src = 'aliens-01.png';
            img2.src = 'aliens-02.gif';
            img3.src = 'aliens-03.png';
            img4.src = 'aliens-04.png';
          } else if (result[0].label == "snapping"){
            img1.src = 'aliens-01.png';
            img2.src = 'aliens-02.png';
            img3.src = 'aliens-03.gif';
            img4.src = 'aliens-04.png';
          } else {
            img1.src = 'aliens-01.png';
            img2.src = 'aliens-02.png';
            img3.src = 'aliens-03.png';
            img4.src = 'aliens-04.gif';
          } 
          
    }
}