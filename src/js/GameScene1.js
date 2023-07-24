var prevquestion=[];
var arrowleft,arrowright,zerolocation,f=0;
var flag=0,r=0;
import { gameState, config,game} from "./index.js";
import { numberbox} from "./GameScene.js";
export default class GameScene1 extends Phaser.Scene {
  constructor() {
    super({
      key: "GameScene1",
    });
  }

  preload() {}
  create() {
    
    this.add.sprite(config.width / 2, config.height / 2,"mainBG");
    var startx=config.width / 2-180;
    const starty=config.height / 2-50;
    var endx=config.width / 2+180;
    const endy=config.height / 2-50;
    this.bottommsg=this.add.image(config.width / 2, config.height / 2+150,"tryagain").setDepth(-1);
    this.topbox=this.add.image(config.width / 2, config.height / 2-150,"speechbubble").setDepth(-1);
    var Line=this.numberline(startx,endx);
    var n=1;
    


    this.tweens.add({
      targets: [Line,arrowleft,arrowright],
        duration: 800,
        lineLength: {
                    from: 0,
                    to: 170
                    },
        onUpdate: (tween, target) => {
    // Redraw the line with updated length
        this.graphics.clear();
        arrowleft.x=startx-target.lineLength+5;arrowright.x=endx+target.lineLength-5
        Line.setTo(startx-target.lineLength, starty, endx + target.lineLength, endy);
      
        this.graphics.strokeLineShape(Line);
        if(target.lineLength/(40*n)>1){
          this.add.image(startx - 40*(n-1),config.height / 2-50,"divline").setScale(0.5);
          numberbox.push(this.add.image(startx - 40*(n-1),config.height / 2-20,"numberbox").setScale(0.8));
          numberbox[numberbox.length-1].name=(numberbox[0].name*1-n).toString();
          this.add.image(endx + 40*(n-1),config.height / 2-50,"divline").setScale(0.5);
          numberbox.push(this.add.image(endx + 40*(n-1),config.height / 2-20,"numberbox").setScale(0.8));
          numberbox[numberbox.length-1].name=(numberbox[7].name*1+n).toString();
          n=n+1;}},
          onComplete: (tween, target) =>{
            this.k=numberbox[15].name*1;
            this.k1=numberbox[14].name*1
            this.posquestions();           
          }

  },this);
   
    this.events.on('resume', () =>
        {   
            this.scene.bringToTop();
            
        },this);
    
        this.checkdragdrop();
  }
//create ends here

  posquestions(){
   
    while(flag<4){
      
      let q = Math.ceil(Math.random().toFixed(5)*(this.k));
      if(prevquestion.length==0){this.questiongenerator(q);prevquestion.push(q);flag=6;}
      for(var j=0;j<prevquestion.length;j++){
      if((prevquestion[j] == q)&&(j!=prevquestion.length-1)){break;}
      else if((prevquestion[j] != q)&&(j==prevquestion.length-1)){prevquestion.push(q);this.questiongenerator(q);flag=5;break;}
      }
    }
  }
  negquestions(){
    while(flag<4){
      
      let q = Math.floor(Math.random().toFixed(5)*(this.k1));
      if(prevquestion.length==0){this.questiongenerator(q);prevquestion.push(q);flag=6;}
      for(var j=0;j<prevquestion.length;j++){
      if((prevquestion[j] == q)&&(j!=prevquestion.length-1)){break;}
      else if((prevquestion[j] != q)&&(j==prevquestion.length-1)){prevquestion.push(q);this.questiongenerator(q);flag=5;break;}
      } 
    }
  }


  checkdragdrop(){
    this.input.on('drag',function(pointer){
      this.questionbox.x=pointer.x;
      this.questionbox.y=pointer.y;

      for(var l=0;l<numberbox.length;l++){
        if(Phaser.Geom.Rectangle.Contains(numberbox[l].getBounds(),pointer.x,pointer.y)&&numberbox[l].name!='filled'){
          numberbox[l].setTexture("dropenable");    
        }
        else if(numberbox[l].name!='filled'){numberbox[l].setTexture("numberbox");}
      }
    },this);
    this.input.on('dragend',function(pointer){
      for(var m=0;m<numberbox.length;m++){
        if(Phaser.Geom.Rectangle.Contains(numberbox[m].getBounds(),pointer.x,pointer.y)&&numberbox[m].name!='filled')
      { r++;
        if(this.questionbox.name==numberbox[m].name){
        numberbox[m].setTexture(this.questionbox.name).setName('filled').setOrigin(0.5,0.40);
        this.questionbox.disableInteractive();this.questionbox.destroy();
          this.topbox.setDepth(-1);
          this.topmsg.destroy();
        this.bottommsg.setTexture("welldone").setDepth(20);
        this.nextbutton();
        this.button1.on("pointerdown",function(){this.bottommsg.setDepth(-1);
          if (prevquestion.length==4){this.cameratransition();}
          else if(prevquestion.length%2==0){flag=0;this.posquestions();} 
          else{flag=0;this.negquestions();}
          this.button1.destroy();
          },this);
        }
        else{
          this.questionbox.setPosition(config.width / 2, config.height / 2+50);
          this.bottommsg.setTexture("tryagain").setDepth(20);
          f++;
          this.scene.pause('GameScene1');
          this.scene.launch('TutorialScene');
        }
      }
      else if(r==0){this.questionbox.setPosition(config.width / 2, config.height / 2+150);}
      else if(r!=0){this.questionbox.setPosition(config.width / 2, config.height / 2+50);}
    }
    },this);
  }
//end of checkdragdrop
  numberline(startpoint,endpoint) {
    arrowleft=this.add.image(startpoint-1,config.height / 2-50,"arrowleft");
    arrowright=this.add.image(endpoint+1,config.height / 2-50,"arrowright");
    this.graphics=this.add.graphics({lineStyle:{width:2,color:0x000000}});
    var Line=new Phaser.Geom.Line(startpoint,config.height / 2-50,endpoint,config.height / 2-50);
    this.graphics.strokeLineShape(Line);
    for(var i=1;i<9;i++){this.add.image(config.width / 2-180+i*40,config.height / 2-50,"divline").setScale(0.5);
    
    numberbox[i-1].scene=this;
    this.add.existing(numberbox[i-1]).setVisible(true);
    numberbox[i-1].setActive(true);
    }
    
    return(Line);
  }
//end of numberline

  questiongenerator(question){
    r=0;
    this.questionbox=this.add.sprite(config.width / 2, config.height / 2+150,question.toString()).setDepth(10).setName(question.toString()).setScale(0.8);
    this.questionbox.setInteractive({useHandCursor:true,draggable: true});
    this.topmsg=this.add.text(config.width / 2, config.height / 2-150,"Plot "+question.toString()+" on the numberline",{fontFamily:"font1",fontSize:"18px",fill:"#ffffff"}).setDepth(20).setOrigin(0.5,0.5);
    this.topbox.setDepth(20);
  }
//end of questiongenerator
  nextbutton() {
    this.button1=this.add.image(config.width / 2+300,config.height / 2+150,"nextarrow");
    this.tweens.add({
      targets: this.button1,
      //delay: 1000,
      scale:{from :0 ,to :1.1},
      duration :2000,
      ease: 'bounce',
      onComplete:function(){
        this.tweens.add({ 
          targets: this.button1,
          scale:0.8,
          duration : 1000,
          yoyo:true,
          ease: 'linear',
          repeat:-1
        },this);
      },
      onCompleteScope: this
    });
    this.button1.setInteractive({useHandCursor:true});

  }

// end of nextbutton  
  cameratransition(){
   
    var numbers=[];var e=this;
    for(var i=0;i<numberbox.length;i++){numbers.push(this.add.text(config.width/2-300+i*40,config.height/2-20,(this.k1+i).toString(),{fontFamily:"font1",fontSize:"18px",fill:"#000000"}).setDepth(20).setOrigin(0.5,0.5).setAlpha(0));}
   

    
    this.tweens.add({
      targets:[numberbox,numbers],
      alphavalue:{from:1,to:0},
      duration:3000,
      onUpdate: function(tweens,target){
        for(var i=0;i<numberbox.length;i++){numberbox[i].setAlpha(target.alphavalue);numbers[i].setAlpha(1-target.alphavalue);}
        
      },
      onComplete:function(){
        e.time.delayedCall(1000,function(){
        game.scene.stop("GameScene1");
        game.scene.stop("TutorialScene");      
        game.scene.start("EndScene");},this);
      }
    },this);  console.log(this);       
  }
  update() { }

}
export{f};