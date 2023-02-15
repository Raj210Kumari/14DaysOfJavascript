document.addEventListener("mousemove",function(e){
    var body=document.querySelector('body')
    var star = document.createElement("span")

    var x=e.offsetX
    var y=e.offsetY

    star.style.left=x+"px"
    star.style.top=y+"px"

    var size=Math.random()*100
    star.style.width=20+size+'px'
    star.style.height=20+size+'px'

    body.appendChild(star)

    setTimeout(function(){
        star.remove()
    },2000)
})