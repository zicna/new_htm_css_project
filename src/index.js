// * keep the same place on page after refresh
document.addEventListener("DOMContentLoaded", ()=>{
    window.moveTo(0, possitionY)
})

let possitionY = localStorage.getItem('scrollY') || 0

document.addEventListener('scroll', () => {
    console.log("we are scrolling")
    localStorage.setItem('scrollY', window.scrollY)
})