let instructions = document.getElementById('instructions');

let bumbleBee = document.getElementById('bumbleBee');

var isClicked = false;


const onMouseMove = (e) =>{
  bumbleBee.style.left = e.pageX + 'px';
  bumbleBee.style.top = e.pageY + 'px';
}
document.addEventListener('mousemove', onMouseMove);

let orangeFlower = document.getElementById('orangeFlower');

let orangeCounter = 0;
let pinkCounter = 0;

console.log(orangeFlower);

orangeFlower.addEventListener("click", () => {
    if(orangeCounter === 0) {
        document.getElementById("orangeImg").src="orangeFlower2.png";
        instructions.innerHTML = "BEES EAT POLLEN BECAUSE IT PROVIDES THEM WITH PROTEIN AND NUTRIENTS";
    }
    else if(orangeCounter === 1) {
        document.getElementById("orangeImg").src="orangeFlower3.png";
    }
    else if(orangeCounter === 2) {
        document.getElementById("orangeImg").src="orangeFlower4.png";
    }
    else if(orangeCounter === 3) {
        document.getElementById("orangeImg").src="orangeFlower5.png";
        instructions.innerHTML = "CLICK ON THE PINK FLOWER TO DISTRIBUTE THE POLLEN";
        let pinkFlower = document.getElementById('pinkFlower');
    pinkFlower.addEventListener('click', () => {
        if(pinkCounter === 0) {
            document.getElementById("pinkImg").src="pink2.png";
            instructions.innerHTML = "WHEN A BEE LANDS ON A NEW FLOWER TO COLLECT ITS POLLEN, THE POLLEN STORED ON ITS LEGS RUBS OFF ON THE NEW FLOWER";
        }
        else if(pinkCounter === 1) {
            document.getElementById("pinkImg").src="pinkFlower3.png";
        }
        else if(pinkCounter === 2) {
            document.getElementById("pinkImg").src="pinkFlower4.png";
        }
        else if(pinkCounter === 3) {
            document.getElementById("pinkImg").src="pinkFlower5.png";
            instructions.innerHTML = "WATCH THE NEW FLOWERS GROW BECAUSE OF THE POLLINATION";

            
            setTimeout(() => {
                let purpleFlower = document.getElementById('purpleFlower');
                purpleFlower.style.visibility = "visible";
                let redFlower = document.getElementById('redFlower');
                redFlower.style.visibility = "visible";

            }, 1000);

            setTimeout(() => {
                let nextButton = document.getElementById('nextButton');
                nextButton.style.visibility = "visible";
            }, 2000);
            
            
        }
        pinkCounter++;

    })
    }
    orangeCounter++;
})