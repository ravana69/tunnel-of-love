// Dwitter Shim by Frank Force 2020
// License Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License.

function u(t) { // dwitter code goes here

// https://www.dwitter.net/d/18729
with(x)for(k=i=520;--i;fill(arc(k+i+(r=(q?3e4:3e5)/i)*S(q?m*m+S(i/9)/7:m),k-i+C(m)*r,r*(q?(1-n%64/249)**9/4:.8),0,9)))q=i%2,n=k-i+t*120*(q?2:-2),m=q?n>>6:n^k,beginPath(fillStyle=R(v=i/2,v*=q,v))

}

let time = 0;
let frame = 0;
let FPS = 60;
let x = c.getContext('2d');
let S = Math.sin;
let C = Math.cos;
let T = Math.tan;
let R = (r,g,b,a=1) => `rgba(${r|0},${g|0},${b|0},${a})`;

let loop = (frameTime) =>
{
  requestAnimationFrame(loop);
  
  // update time
  time = frame++ / FPS;
  if (time*FPS|0 == frame-2)
    time += 1e-6; // fixup floating point
  
  // update user function
  u(time);
  
  {
    // fill window
    c.style.width = c.style.height = '';
    const aspect = c.width / c.height;
    if (aspect > innerWidth / innerHeight)
      c.style.height = '100%';
    else
      c.style.width = '100%';
  }
}

loop();