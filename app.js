var h5timer = document.querySelector("#line1-part1 h5");
var grow = 0;
var intervalId = null;

var tl = gsap.timeline();
tl.from(".line h1", {
    y: 200,
    stagger: 0.2
})
tl.from("#line1-part1, .line h2", {
    opacity: 0,
    onStart: function() {
        intervalId = setInterval(() => {
            if (grow < 100) {
                h5timer.innerHTML = grow++;
            } else {
                h5timer.innerHTML = grow = 100;
                clearInterval(intervalId); // clear the interval
            }
        }, 30);
    }
})
tl.to("#load", {
    opacity: 0,
    duration: 0.2,
    delay: 3.5
})
tl.from("#page1",{
    duration: 0.5,
    y:1200,
    ease:power4,
})
tl.to("#load",{
    diaply:None
})