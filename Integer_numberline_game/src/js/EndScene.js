var arrowleft,arrowright;
import { gameState, config,game} from "./index.js";
export default class EndScene extends Phaser.Scene {
  constructor() {
    super({
      key: "EndScene",
    });
  }
  preload() {}
  create() {
    this.add.sprite(config.width / 2, config.height / 2,"mainBG");
          this.add.image(config.width/2,config.height/2,"overlay");
          this.replaybutton=this.add.image(config.width / 2,config.height / 2,"replaybutton");
          this.replaybutton.setInteractive();
          this.replaybutton.on("pointerover",function(){
            this.replaybutton.setTexture("replaybuttonhover"); 
          },this);
          this.replaybutton.on("pointerout",function(){
            this.replaybutton.setTexture("replaybutton");
          },this);
          this.replaybutton.on("pointerdown",function(){
            
            this.cameras.main.fadeOut(500, 255, 255, 255);
            this.cameras.main.once(
              "camerafadeoutcomplete",
              function (camera) {
                game.scene.stop('EndScene');
                game.scene.start("StartScene");
                
                });
          },this);

          this.replaybutton.on("pointerup",function(){
            
            this.replaybutton.disableInteractive();
            this.replaybutton.setScale(0.82);
          },this);

       
  }
  
  update() {}

}
