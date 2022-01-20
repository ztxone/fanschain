
const scroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true,
  repeat: true
})
const intro = document.querySelector('.intro')
const introH1 = document.querySelector('.intro__h1')

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

console.log("Hello");
sleep(2000).then(() => { console.log("World!"); });
function fadeOut() {
  setTimeout(() => {
    introH1.classList.remove('animate-pulse')
    
    intro.classList.add('opacity-0')
    
    introH1.classList.add('opacity-0')  
    
  }, 4000 ) 
}

fadeOut()
clearTimeout()
sleep(6000).then(() => intro.classList.add('hidden'))

