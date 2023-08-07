import { gameState, config,game} from "./index.js";
export default class StartScene extends Phaser.Scene {
  constructor() {
    super({
      key: "StartScene",
    });
  }
  preload() {}
  create() {
    this.add.sprite(config.width / 2, config.height / 2, "mainBG");
    this.add.sprite(config.width / 2, config.height / 2, "startBG");
    
    
    this.button=this.add.image(config.width / 2, (config.height / 2)+50, "playbutton");
    this.button.setInteractive();
    this.button.on("pointerover",function(){
      this.button.setTexture("playButtonHover"); 
    },this);
    this.button.on("pointerout",function(){
      this.button.setTexture("playbutton");
    },this);


   this.button.on("pointerdown",function(){
      
      this.cameras.main.fadeOut(500, 255, 255, 255);
      this.cameras.main.once(
        "camerafadeoutcomplete",
        function (camera) {
          
          game.scene.stop('StartScene');
          game.scene.start("GameScene");});
    },this);

    this.button.on("pointerup",function(){
      
      this.button.disableInteractive();
      this.button.setScale(0.82);
    },this);
    
  }
    

  update() {}

}
