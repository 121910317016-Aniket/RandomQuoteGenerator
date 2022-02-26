function myfunction(){
    let x = Math.floor((Math.random() * 10) + 1);
    //document.write(2);
    
    
    if(x==1){
        document.getElementById("quote").innerHTML="It always seems impossible until it's done";
    }
    else if(x==2){
        document.getElementById("quote").innerHTML="Nothing is impossible. The word itself says Im possible!";
    }
    else if(x==3){
        document.getElementById("quote").innerHTML="The bad news is time flies. The good news is you’re the pilot";
    }
    else if(x==4){
        document.getElementById("quote").innerHTML="Life has got all those twists and turns. You’ve got to hold on tight and off you go.";
    }
    else if(x==5){
        document.getElementById("quote").innerHTML="Keep your face always toward the sunshine, and shadows will fall behind you";
    }
    else if(x==6){
        document.getElementById("quote").innerHTML="Success is not final, failure is not fatal: it is the courage to continue that counts.";
    }
    else if(x==7){
        document.getElementById("quote").innerHTML="You define your own life. Don’t let other people write your script.";
    }
    else if(x==8){
        document.getElementById("quote").innerHTML="You are never too old to set another goal or to dream a new dream.";
    }
    else if(x==9){
        document.getElementById("quote").innerHTML="Spread love everywhere you go.";
    }
    else{
        document.getElementById("quote").innerHTML=" Better luck Next time ";
    }

}