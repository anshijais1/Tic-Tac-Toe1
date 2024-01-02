let boxes=document.querySelectorAll(".box");
let submit = document.querySelector(".button"); // Assuming ".button" selects the submit button


let turn=true;
let winmsg=document.querySelector(".winmsg");
const winpattern=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
boxes.forEach((box)=> {
    box.addEventListener("click",() =>{
        console.log("Hello");
        if(turn){
            box.innerText="X";
            
            turn=false;
        }
        else{
            box.innerText="0";
            turn=true;
        }   box.disabled=true;
        checkForWinner() 

      
      });
});

function checkForWinner() {
    for (let pattern of winpattern) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
            if (pos1 === pos2 && pos2 === pos3) {
                
                winmsg.innerText=`Congratulations Winner is ${pos1} !`;
                for(let box of boxes){
                    box.disabled=true;
                }
            }
        }
    }};
    

submit.addEventListener("click", () => {
    // Your event handling logic
    for(let box of boxes){
            box.disabled=false;
            box.innerText="";
    }
        
        winmsg.innerText="";
});