// * keep the same place on page after refresh
document.addEventListener("DOMContentLoaded", ()=>{
    console.log(possitionY)
    window.moveTo(0, possitionY)
})

let possitionY = localStorage.getItem('scrollPos') || 0
document.addEventListener('scroll', () => {
    console.log("scrolling")
    localStorage.setItem('scrollPos', window.scrollY)
})