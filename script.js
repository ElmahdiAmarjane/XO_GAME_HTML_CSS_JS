let items = document.querySelectorAll(".item");
let title = document.querySelector('.title');
let turn = 'x';

     
    items.forEach(element => {
        element.addEventListener("click",()=>{
            if(turn === "x" &&  element.innerHTML===""){
                element.innerHTML = 'X';
                let mySound = new Audio('throwknife2.mp3');
                 mySound.play()
                winner(turn);
                turn = "o";
            }
         
             if(turn==="o" &&  element.innerHTML==="")  {
                element.innerHTML="O";
                let mySound = new Audio('wv-sword.mp3');
                mySound.play()
                winner(turn);
                turn='x';
            }
          
        })
       
     }
    )
  
     function winner(turn){
        let timout=2000;
           if(items[0].innerHTML===items[1].innerHTML && items[1].innerHTML===items[2].innerHTML&&items[2].innerHTML!==""){
               title.innerHTML="GAME OVER "+ turn+" winner";
               soundXwinner(turn);
            setTimeout(() => {
                location.reload();
            }, timout);
           }
           if(items[3].innerHTML===items[4].innerHTML && items[4].innerHTML===items[5].innerHTML&&items[5].innerHTML!==""){
            title.innerHTML="GAME OVER "+ turn+" winner";
             setTimeout(() => {
                location.reload();
             }, timout);
        }
        if(items[6].innerHTML===items[7].innerHTML && items[7].innerHTML===items[8].innerHTML&&items[8].innerHTML!==""){
            title.innerHTML="GAME OVER "+ turn+" winner";
              setTimeout(() => {
                location.reload();
              }, timout);   
        }

        if(items[0].innerHTML===items[3].innerHTML && items[0].innerHTML===items[6].innerHTML&&items[6].innerHTML!==""){
            title.innerHTML="GAME OVER "+ turn+" winner";
             setTimeout(() => {
                location.reload();
             }, timout);
        }
        if(items[1].innerHTML===items[4].innerHTML && items[4].innerHTML===items[7].innerHTML&&items[1].innerHTML!==""){
         title.innerHTML="GAME OVER "+ turn+" winner";
             setTimeout(() => {
                location.reload();
             }, timout);
     }
     if(items[2].innerHTML===items[6].innerHTML && items[6].innerHTML===items[8].innerHTML&&items[8].innerHTML!==""){
         title.innerHTML="GAME OVER "+ turn+" winner";
         setTimeout(() => {
            location.reload();
         }, timout);
     }
     }
     function soundXwinner(turn){
        if(turn==="x"){
            let mySound = new Audio('success_sound1.mp3');
            mySound.play()
            let mysound2= new Audio('x_winner.wav');
            mysound2.play();
        }
        else{
            let mySound = new Audio('success_sound1.mp3');
            mySound.play()
            let mysound2= new Audio('y_winner.wav');
        }
  
     }
