console.log("hello im here")

let bumbleBee = document.getElementById('bumbleBee');

const onMouseMove = (e) =>{
    console.log("inside");
  bumbleBee.style.left = e.pageX + 'px';
  bumbleBee.style.top = e.pageY + 'px';
}
document.addEventListener('mousemove', onMouseMove);