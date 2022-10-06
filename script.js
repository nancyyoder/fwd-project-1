let instructions = document.getElementById('instructions');

let bumbleBee = document.getElementById('bumbleBee');

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
    console.log("orange flower clicked")
    if(orangeCounter === 0) {
        document.getElementById("orangeImg").src="orangeFlower2.png";
        instructions.innerHTML = "BEES COLLECT POLLEN BECAUSE ... ";
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
    }
    orangeCounter++;
    console.log("orange counter", orangeCounter);
})

let pinkFlower = document.getElementById('pinkFlower');

pinkFlower.addEventListener('click', () => {
    if(pinkCounter === 0) {
        document.getElementById("pinkImg").src="pinkFlower2.png";
        instructions.innerHTML = "BEES DISTRIBUTE POLLEN BECAUSE ... ";
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
    console.log("pink counter", pinkCounter);

})