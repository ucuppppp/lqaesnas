const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

let raindrops = []
let raindropLength = 80;
let dropSpeed = 7
let width = canvas.width
let height = canvas.height


function raindropsAnimate(){
  let x = Math.floor(Math.random() * width)
  let y = -raindropLength

  raindrops.push({x,y})
}



function animate(){
  ctx.clearRect(0,0,width,height)

  ctx.font = "bold 50px arial"
  ctx.textAlign = "center"
  ctx.lineWidth = 1
  ctx.strokeText("Rain Forest", width / 2, height / 2)
  
  for(let i = 0; i < raindrops.length; i++){
    let drop = raindrops[i]
    drop.y += dropSpeed

    ctx.beginPath()
    ctx.moveTo(drop.x, drop.y)
    ctx.lineTo(drop.x, drop.y + raindropLength)
    ctx.lineWidth = 3
    ctx.stroke()

    if(drop.y > height){
      raindrops.splice(i,1)
    }

  }

  if(Math.random() < 0.3){
    raindropsAnimate()
  }
  

  requestAnimationFrame(animate)
}

animate(
  
)