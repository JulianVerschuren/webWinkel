window.addEventListener('load', startApp);

function startApp(){
    var forwardButton = document.getElementById('forwardButton');
    var backButton = document.getElementById('backButton');
    var array = ["img/oldtimers/1.jpg",
                 "img/oldtimers/2.jpg",
                 "img/oldtimers/3.jpg",
                 "img/oldtimers/4.jpg",
                 "img/oldtimers/5.jpg"];
    
    var slide = document.getElementById('slide');
    var counter= 0;
    
    
    
    forwardButton.addEventListener('click',goForward);
    backButton.addEventListener('click', goBack);
    
    function goForward(){
        counter = counter + 1;
        if(counter >4){
            counter = 0;
        }
        slide.src = array[counter];
    }
    
    function goBack(){
           counter = counter - 1;
        if(counter <0){
            counter = 4;
        }
        slide.src = array[counter];
    }
}


