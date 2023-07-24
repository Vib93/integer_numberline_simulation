var numberbox=[];
var flag;
import { gameState, config,game} from "./index.js";

export default class GameScene extends Phaser.Scene {
  
  
  constructor() {
    super({
      key: "GameScene",
    });
  }

  
  preload() {}
  create() {
    numberbox=[];
    const a=this;
    
    this.cameras.main.fadeIn(500, 255, 255, 255);
    
    this.add.sprite(config.width / 2, config.height / 2,"mainBG");
    this.add.sprite(config.width / 2, config.height / 2-160,"textbubble1");
    this.numberline();
    for(var i=0;i<numberbox.length;i++){console.log(numberbox[i]);}
    this.zerobox=this.add.sprite(config.width / 2, config.height / 2+150,"zerobox").setScale(0.8);
    this.zerobox.setInteractive({useHandCursor:true,draggable: true,pixelPerfect: true});
      this.input.on('drag',function(pointer){
      this.zerobox.x=pointer.x;
      this.zerobox.y=pointer.y;
      for(var i=0;i<numberbox.length;i++){
        if(Phaser.Geom.Rectangle.Contains(numberbox[i].getBounds(),pointer.x,pointer.y)){
        numberbox[i].setTexture("dropenable");
        
        }
        else{numberbox[i].setTexture("numberbox")}
      }
    },this);
    
    this.input.on('dragend',function(pointer){
      for(var i=0;i<8;i++){
        if(Phaser.Geom.Rectangle.Contains(numberbox[i].getBounds(),pointer.x,pointer.y)){numberbox[i].setTexture("zerobox").setName('filled').setOrigin(0.5,0.40);
        this.zerobox.disableInteractive();this.zerobox.destroy();
        for(var j=0;j<i;j++){
          numberbox[j].name=(j-i).toString();
        }
        for(var j=i+1;j<numberbox.length;j++){
          numberbox[j].name=(j-i).toString();
        }
        this.add.image(config.width / 2, config.height / 2+150,"welldone");

        this.confettiAnim = this.add.sprite(config.width / 2, config.height / 2+150, "confetti").setScale(0.8);

        this.anims.create({
          key: "confettishower",
          frames: this.anims.generateFrameNames("confetti", {
            start:0,
            end: 30,
            zeroPad: 0,
            prefix: "checkconfetti",
            suffix: ".png",
          }),
          //frameRate: 10,
          repeat: -1,
        });
        this.confettiAnim.play("confettishower");
        this.nextbutton();
          this.button1.on("pointerdown",function(){
        
            
              game.scene.stop('GameScene');
              game.scene.start("GameScene1");});

      }
    else{
      this.zerobox.setPosition(config.width / 2, config.height / 2+150);
    }
  
    }
    },this);
    
   
   

  }

  numberline() {
    this.add.image(config.width / 2-174,config.height / 2-50,"arrowleft");
    this.add.image(config.width / 2+173,config.height / 2-50,"arrowright");
    this.graphics=this.add.graphics({lineStyle:{width:2,color:0x000000}});
    var startLine=new Phaser.Geom.Line(config.width / 2-180,config.height / 2-50,config.width / 2+175,config.height / 2-50);
    this.graphics.strokeLineShape(startLine);
    for(var i=1;i<9;i++){
      this.add.image(config.width / 2-180+i*40,config.height / 2-50,"divline").setScale(0.5);
      numberbox.push(this.add.image(config.width / 2-180+i*40,config.height / 2-20,"numberbox").setScale(0.8));
      //this.add.image(config.width / 2+i*50,config.height / 2-50,"divline");
      //numberbox.push(this.add.image(config.width / 2-225+i*50,config.height / 2-10,"numberbox"));
    
    }
  }
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


  update() {}

}

export{numberbox};