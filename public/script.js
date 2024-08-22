const navDialogue = document.getElementById('nav-dialog');
function handleMenu() {
    navDialogue.classList.toggle('hidden');
}
const initialTranslateLTR = -16*4;
const initialTranslateRTL = 8*4;
function setupIntersectionObserver(element, isLTR, speed){
    const intersectionCallback = (entries) => {
        const isIntersecting = entries[0].isIntersecting;
        if(isIntersecting){
            document.addEventListener('scroll', scrollHandler);
        } else {
            document.removeEventListener('scroll', scrollHandler);
        }
        
    }
    const instersectionObserver = new IntersectionObserver(intersectionCallback);
    instersectionObserver.observe(element);
    function scrollHandler() {
        const translateX = (window.innerHeight - element.getBoundingClientRect().top) * speed;
        let totalTranslate = 0;
        if (isLTR){
            totalTranslate = (translateX + initialTranslateLTR)
        }else {
            totalTranslate = -(translateX + initialTranslateRTL)
        }
        element.style.transform = `translateX(${totalTranslate}px)`;
    }
}

const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");
const line3 = document.getElementById("line3");
const line4 = document.getElementById("line4");
const appImage = document.getElementById('appImage');

setupIntersectionObserver(line1, true, 0.15);
setupIntersectionObserver(line2, false, 0.15);
setupIntersectionObserver(line3, true, 0.15);
setupIntersectionObserver(line4, false, 1.5);

document.addEventListener('DOMContentLoaded', (event) => {
    const element = document.getElementById('rocket');
    const animationDuration = 3000; 
    const delayDuration = 5000; 
  
    setInterval(() => {
      element.classList.add('animate-bounce-custom');
        setTimeout(() => {
        element.classList.remove('animate-bounce-custom');
      }, animationDuration);
    }, delayDuration);
  });

var details = document.querySelector("details");
let chevron = document.getElementsByClassName("chevron");

details.addEventListener("toggle", () => {
 chevron.class = ""
})