import { gameState, config} from "./index.js";
import { f} from "./GameScene1.js";
export default class TutorialScene extends Phaser.Scene {
  constructor() {
    super({
      key: "TutorialScene",
    });
  }

  preload() {}
  create() {
      this.scene.bringToTop();
      this.add.image(config.width/2,config.height/2,"overlay");
      const hint=this.add.image(config.width/2,config.height/2,"hint1");
      
      if(f%2==0){
        
        hint.setTexture("hint1");
      }
      else{
        hint.setTexture("hint2");
      }
    
    const closehint=this.add.image(config.width/2+290,config.height/2-115,"hintclose").setInteractive({useHandCursor:true});
    closehint.on('pointerdown',function(){
      
      this.scene.resume('GameScene1');
      this.scene.pause("TutorialScene");
      
    },this);

  }
  update() {}

}
