const sierpinski = (canvas, startPoints, randomPoint, iterations=25000, pointSize=1) => {
  var c = document.getElementById(canvas);
  var ctx = c.getContext("2d");
  ctx.fillStyle = "black";

  const draw = (point) => {
    console.log('drawing', point);
    ctx.fillRect(point[0],point[1],pointSize,pointSize);
  }    
      
  let lastPoint = randomPoint;
  [...startPoints, randomPoint].map(draw);

  while(iterations--) {
    let edgePoint = startPoints[Math.round(Math.random()*2)]
    let targetPoint = [
      (edgePoint[0] + lastPoint[0])/2, 
      (edgePoint[1] + lastPoint[1])/2
    ];
    draw(targetPoint);
    lastPoint = targetPoint;
  }
}