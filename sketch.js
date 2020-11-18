let display = [];
let colon = [];
let number;
function setup() {
   createCanvas(600,480);
   let inc = 80;
   let x = 50;
   let j = 0;
   for(let i=0;i<6;i++){
      display[i] = new Display(x, height/2-40, 100);
      if((i+1)%2 == 0) {
         colon[j++] = x+inc;
         x = x + inc+30;
      }
      else{
         x = x + inc;  
      }    
   }
   number = new Array(10);
   initializeArray();
}
function draw(){
   frameRate(1);
   background(0);
   let sec = ("0" + second()).slice(-2);
   let min = ("0" + minute()).slice(-2);
   let hrs = ("0" + hour()).slice(-2);
   console.log(colon);
   display[0].show(number[hrs[0]]);
   display[1].show(number[hrs[1]]);
   display[2].show(number[min[0]]);
   display[3].show(number[min[1]]);
   display[4].show(number[sec[0]]);
   display[5].show(number[sec[1]]);
   
   fill(255,0,0);
   for(let i=0;i<2;i++){
      ellipse(colon[i], height/2-20, 10);
      ellipse(colon[i], height/2+40, 10);
   }
}

function initializeArray(){
   
   number[0] = [true, true, true, true, true, true, false];
   number[1] = [false, true, true, false, false, false, false];
   number[2] = [true, true, false, true, true, false, true];
   number[3] = [true, true, true, true, false, false, true];
   number[4] = [false, true, true, false, false, true, true];
   number[5] = [true, false, true, true, false, true, true];
   number[6] = [true, false, true, true, true, true, true];
   number[7] = [true, true, true, false, false, false, false];
   number[8] = [true, true, true, true, true, true, true];
   number[9] = [true, true, true, true, false, true, true];
}
