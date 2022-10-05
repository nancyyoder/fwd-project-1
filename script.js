let bumbleBee = document.getElementById('bumbleBee');

const onMouseMove = (e) =>{
  bumbleBee.style.left = e.pageX + 'px';
  bumbleBee.style.top = e.pageY + 'px';
}
document.addEventListener('mousemove', onMouseMove);

let titleText = document.getElementById('titleText');

let orangeFlower = document.getElementById('orangeFlower');

let orangeCounter = 0;
let pinkCounter = 0;

orangeFlower.addEventListener('click', () => {
    orangeCounter++;
    console.log("orange counter", orangeCounter);
})

let pinkFlower = document.getElementById('pinkFlower');

pinkFlower.addEventListener('click', () => {
    titleText.innerHTML = "PINK FLOWER CLICKED";
    if(pinkCounter === 0) {
        document.getElementById("pinkImg").src="pinkFlower2.png";
    }
    else if(pinkCounter === 1) {
        document.getElementById("pinkImg").src="pinkFlower3.png";
    }
    else if(pinkCounter === 2) {
        document.getElementById("pinkImg").src="pinkFlower4.png";
    }
    else if(pinkCounter === 3) {
        document.getElementById("pinkImg").src="pinkFlower5.png";
    }
    pinkCounter++;
    console.log("pink counter", pinkCounter);




})