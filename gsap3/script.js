var tl = gsap.timeline()


function time() {
  var a = 0
  setInterval(function(){
    a = a + Math.floor(Math.random()*20)
    if(a<100){
      document.querySelector("#loader h1").
      innerHTML = a+"%"
    }else{
      a = 100
      document.querySelector("#loader h1").
      innerHTML = a+"%"
    }
  },150)
}

tl.to("#loader h1",{
  duration:1,
  delay:0.5,
  onStart:time()
})
tl.to("#loader",{
  top:"-100vh",
  delay:0.5,
})


var tl = gsap.timeline()

tl.from("#nav h1,#nav ul,#nav .btn",{
  y:-100,
  delay:2,
  duration:1,
  opacity:0,
  stagger:0.2,
})
tl.from("#home .left, .right",{
  x:-100,
  y:100,
  duration:1,
  opacity:0,
})
tl.from("#home .center",{
  x:-100,
  duration:1,
  opacity:0,
})
