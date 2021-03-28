let nbarray = [];
let value = 150;

function setup() {
  createCanvas(600, 600, WEBGL); 
  createSpan('調整衛星形狀');
  detailX = createSlider(2, 5, 8);
  for(let i=0;i<5;i+=1){
    // 怎麼把東西放到 nbarray 袋子裡面的公式
    //起始的生成位置
    nbarray.push(new myBox(random(-150),-height/2+(height/5)*i,-25,35));
  }
}
function draw() {
  background(mouseX*0.1,mouseY*0.1,80);
  push();
      rotateY(frameCount*0.01);
  rotateX(frameCount*0.005);
     fill(20,100,0,0);
    stroke(0,200,100);
    sphere(600, 2, 10);
  pop();
  // 將袋子中 所有 東西 稱為 V 執行他的相關函式
  nbarray.forEach((v)=>{
    v.display();
  })
}
// 自訂一個類別物件
class myBox{
  // 怎樣建構這個物件 只執行一次
  constructor(x,y,z,size){
    this.x=x;
    this.y=y;
    this.z=z;
    this.size=size;
    this.mx = 1*random(2.3);
    // 隨機產生物件顏色
    this.cc = color(10,random(255),150,90);
    // 衛星的中心xyz = 物件，衛星的大小 < 物件， 衛星的距離自訂
    this.stela = new stela(this.x,this.y,this.z,this.size*0.25,this.size);
    this.stela2 = new stela2(this.x,this.y,this.z,this.size*0.25,this.size);
    this.stela3 = new stela3(this.x,this.y*10,this.z,this.size*0.1,this.size);
  }
  // 定義一些能力 我們呼叫時 執行 
  // 能力1:顯現這box
  display(){
    push();
      translate(-this.x,this.y,this.z); 
    if(mouseIsPressed){
      if (mouseX-width/2 > -this.x-this.size/2 && 
          mouseX-width/2 < -this.x+this.size/2 &&
          mouseY-height/2 > this.y-this.size/2 && 
          mouseY-height/2 < this.y+this.size/2){
        this.size = this.size-0.6
        this.mx = this.mx+0.08;
        this.cc = color(random(200),0,random(255),90);
        }
    }
        rotateX(frameCount*0.02);
        rotateY(frameCount*0.02);
      this.stela.display();
      this.stela2.display();
      this.stela3.display();
      stroke(value);
      fill(this.cc);
      sphere(this.size);
    pop();
    this.move();
  }
  //能力2:移動規則
  move(){
    if (this.x>width/2){this.mx = -1*this.mx}
    if (this.x<-width/2){this.mx = -1*this.mx;}  
    if (this.y>width/2){this.mx = -1*this.mx;}
    if (this.y<-width/2){this.mx = -1*this.mx;}
    this.x = this.x + this.mx*1.5;
    this.y = this.y + this.mx;
  }
}
// 衛星
class stela{
  constructor(x,y,z,size,cdx){
    //衛星的旋轉中心
    this.x=x;
    this.y=y;
    this.z=z-10;
    this.size=size+7;
    // 衛星距離旋轉中心的x距離
    this.cdx=-cdx-10;
    // 隨機產生物件顏色
    this.cc = color(200,random(150),30);
  }
  display(){
    push();
    if (mouseX-width/2 > -this.x-this.size/2 && 
          mouseX-width/2 < -this.x+this.size/2 &&
          mouseY-height/2 > this.y-this.size/2 && 
          mouseY-height/2 < this.y+this.size/2){
        }
      rotateZ(frameCount*0.03);
      rotateY(frameCount*0.05);
      rotateX(frameCount*0.04);
      translate(this.cdx-10*sin(30),30,0);  
      fill(this.cc);
      stroke(200);
      box(detailX.value()*2,detailX.value()*5);
    pop();
  }
}

class stela2{
  constructor(x,y,z,size,cdx){
    //衛星的旋轉中心
    this.x=x*2;
    this.y=y;
    this.z=z-10;
    this.size=size+5;
    // 衛星距離旋轉中心的x距離
    this.cdx=-cdx*1.3;
    // 隨機產生物件顏色
    this.cc = color(200,random(200),60);
  }
  display(){
    push();
      rotateZ(frameCount*-0.03);
      rotateX(frameCount*-0.03);
      translate(this.cdx-10*sin(30),30,0);  
      fill(this.cc);
      stroke(100,0,200);
      sphere(detailX.value()*2,detailX.value());
    pop();
  }
}

class stela3{
  constructor(x,y,z,size,cdx){
    //衛星的旋轉中心
    this.x=x;
    this.y=y;
    this.z=z-10;
    this.size=size+2;
    // 衛星距離旋轉中心的x距離
    this.cdx=-cdx*1.6;
    // 隨機產生物件顏色
    this.cc = color(200,random(200),60);
  }
  display(){
    push();
      rotateZ(frameCount*0.01);
      rotateY(frameCount*-0.01);
      rotateX(frameCount*-0.03);
      translate(this.cdx-10*sin(30),30,0);  
      fill(this.cc);
      stroke(100);
      cone(detailX.value()*3, detailX.value()*5, detailX.value(), 16);
    pop();
  }
}

function mouseClicked() {
  if (value === 0) {
    value = 150;
  } else {
    value = 0;
  }
}


