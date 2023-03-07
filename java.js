// click dblclick mouseenter mouseout mousemove



const sliderLine = document.querySelector(".q2_rasm"),
      prevbutton = document.querySelector(".button-prev"),
      nextbutton = document.querySelector(".button-next"),
      dots = document.querySelectorAll(".dot");

let position = 0,
    dotIndex =0;
    
    
//function 
const nextSlide = ()=>{
    if(position < (dots.length-1) * 400){
        position += 400
        dotIndex++
    }
      else{
        position = 0;
        dotIndex = 0; 
      }
    sliderLine.style.left = `-${position}px`;
    thisSlide(dotIndex)
}
const prevSlide = ()=>{
    if(position>0){
        position -= 400
        dotIndex --
    }
      else{
        position = (dots.length-1) * 400
        dotIndex = (dots.length-1)
      }
    sliderLine.style.left = `-${position}px`;
    thisSlide(dotIndex)
}

// dots click
const thisSlide = (index) =>{
    for(let dot of dots){
        dot.classList.remove("active")
    }
    dots[index].classList.add('active')
}

// eventlisteners
nextbutton.addEventListener("click",nextSlide);
prevbutton.addEventListener("click",prevSlide);


// dots
dots.forEach((dot,index)=>{
    dot.addEventListener("click",()=>{
        position = 400 * index
        sliderLine.style.left =`-${position}px`;
        dotIndex = index
        thisSlide(dotIndex)
       })
})