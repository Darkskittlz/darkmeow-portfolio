import React, { Component } from 'react'
import ParticlesBg from 'particles-bg'

let config = {
  num: [4, 7],
  rps: 0.1,
  radius: [5, 40],
  life: [1.5, 3],
  v: [2, 1],
  tha: [-40, 40],
  alpha: [0.6, 0],
  scale: [1, 5],
  position: "center", // all or center or {x:1,y:1,width:100,height:100}
  cross: "dead", // cross or bround
  random: 15,  // or null,
  g: 0.5,    // gravity
  // color: "black",
  color: ["random", "#ff0000"],
  // rotate: [0, 20],
  // body: "/images/discord.png", // Whether to render pictures
  // f: [2, -1], // force
  onParticleUpdate: (ctx, particle) => {
      ctx.beginPath();
      ctx.rect(particle.p.x, particle.p.y, particle.radius * 2, particle.radius * 2);
      ctx.fillStyle = particle.color;
      ctx.fill();
      ctx.closePath();
  }
};


class ParticleComponent extends Component {
  render () {
    return (
      <>
        <ParticlesBg 
          type="circle" 
          config={config}
          bg={true} 
        />
      </>
    )
  }
}

export default ParticleComponent;