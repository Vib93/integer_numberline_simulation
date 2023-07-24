import { gameState, config,game} from "./index.js";

export default class LoadScene extends Phaser.Scene {
  constructor() {
    super({
      key: "LoadScene",
    });
  }

  preload() {
    this.load.atlas("load", "assets/loadAnims/loadAnim.png", "assets/loadAnims/loadAnim.json");
    this.load.atlas("load2", "assets/loadAnims/loadAnim2.png", "assets/loadAnims/loadAnim2.json");
  }

  create() {
    this.loadAnim = this.add.sprite(config.width / 2, config.height/2, "load").setScale(0.25);
    this.loadAnim2 = this.add
      .sprite(config.width / 2, config.height / 2, "load2")
      .setVisible(false)
      .setScale(0.5);

    this.anims.create({
      key: "loading",
      frames: this.anims.generateFrameNames("load", {
        start: 0,
        end: 8,
        zeroPad: 0,
        prefix: "LOAD",
        suffix: ".png",
      }),
      frameRate: 20,
      repeat: -1,
    });

    this.anims.create({
      key: "loading2",
      frames: this.anims.generateFrameNames("load2", {
        start: 9,
        end: 40,
        zeroPad: 0,
        prefix: "LOAD",
        suffix: ".png",
      }),
      frameRate: 20,
      repeat: 0,
    });

    this.assetsLoad();

    this.load.start();

    this.load.on(
      "progress",
      function (value) {
        this.loadAnim.play("loading");
      },
      this
    );

    //this.load.on("fileprogress", function (file) {}, this);
    this.load.on(
      "complete",
      function () {
        console.log("complete");
        this.loadAnim.destroy();
        this.loadAnim2.setVisible(true).play("loading2");
        this.loadAnim2.on(
          Phaser.Animations.Events.ANIMATION_COMPLETE,
          function () {
            this.scene.stop("LoadScene");
            this.scene.start("StartScene");
          },
          this
        );
      },
      this
    );
  }

  assetsLoad() {
    this.load.image("mainBG", "/assets/GameSceneAssets/SimImages/mainBG.png");
    this.load.image("startBG", "/assets/GameSceneAssets/SimImages/startSceneBG.png");
    this.load.image("playbutton", "/assets/GameSceneAssets/SimImages/playButton.png");
    this.load.image("playButtonHover", "/assets/GameSceneAssets/SimImages/playButtonHover.png");
    this.load.image("textbubble1", "/assets/GameSceneAssets/SimImages/text-1.png");
    this.load.image("arrowleft", "/assets/GameSceneAssets/SimImages/arrowLeft (1).png");
    this.load.image("arrowright", "/assets/GameSceneAssets/SimImages/arrowRight (1).png");
    this.load.image("divline", "/assets/GameSceneAssets/SimImages/divLine.png");
    this.load.image("numberbox", "/assets/GameSceneAssets/SimImages/InputField.png");
    this.load.image("zerobox", "/assets/GameSceneAssets/SimImages/zeroBox.png");
    this.load.image("dropenable", "/assets/GameSceneAssets/SimImages/dropEnable.png");
    this.load.image("welldone", "/assets/GameSceneAssets/SimImages/wellDone.png");
    this.load.image("nextarrow", "/assets/GameSceneAssets/SimImages/Carousel arrow.png");
    this.load.atlas("confetti", "assets/GameSceneAssets/arrow confetti/checkConfettiAnim.png", "assets//GameSceneAssets/arrow confetti/checkConfettiAnim.json");
    this.load.image("1", "/assets/GameSceneAssets/SimImages/PosQuestions/1.png");this.load.image("-1", "/assets/GameSceneAssets/SimImages/NegQuestions/-1.png");
    this.load.image("2", "/assets/GameSceneAssets/SimImages/PosQuestions/2.png");this.load.image("-2", "/assets/GameSceneAssets/SimImages/NegQuestions/-2.png");
    this.load.image("3", "/assets/GameSceneAssets/SimImages/PosQuestions/3.png");this.load.image("-3", "/assets/GameSceneAssets/SimImages/NegQuestions/-3.png");
    this.load.image("4", "/assets/GameSceneAssets/SimImages/PosQuestions/4.png");this.load.image("-4", "/assets/GameSceneAssets/SimImages/NegQuestions/-4.png");
    this.load.image("5", "/assets/GameSceneAssets/SimImages/PosQuestions/5.png");this.load.image("-5", "/assets/GameSceneAssets/SimImages/NegQuestions/-5.png");
    this.load.image("6", "/assets/GameSceneAssets/SimImages/PosQuestions/6.png");this.load.image("-6", "/assets/GameSceneAssets/SimImages/NegQuestions/-6.png");
    this.load.image("7", "/assets/GameSceneAssets/SimImages/PosQuestions/7.png");this.load.image("-7", "/assets/GameSceneAssets/SimImages/NegQuestions/-7.png");
    this.load.image("8", "/assets/GameSceneAssets/SimImages/PosQuestions/8.png");this.load.image("-8", "/assets/GameSceneAssets/SimImages/NegQuestions/-8.png");
    this.load.image("9", "/assets/GameSceneAssets/SimImages/PosQuestions/9.png");this.load.image("-9", "/assets/GameSceneAssets/SimImages/NegQuestions/-9.png");
    this.load.image("10", "/assets/GameSceneAssets/SimImages/PosQuestions/10.png");this.load.image("-10", "/assets/GameSceneAssets/SimImages/NegQuestions/-10.png");
    this.load.image("tryagain", "/assets/GameSceneAssets/SimImages/tryAgain.png");
    this.load.image("hint1", "/assets/GameSceneAssets/SimImages/hint-1.png");
    this.load.image("hint2", "/assets/GameSceneAssets/SimImages/hint-2.png");
    this.load.image("hintbg", "/assets/GameSceneAssets/SimImages/hintBG.png");
    this.load.image("hintclose", "/assets/GameSceneAssets/SimImages/hintCloseButton.png");
    this.load.image("overlay", "/assets/GameSceneAssets/SimImages/overlay.png");
    this.load.image("replaybutton", "/assets/GameSceneAssets/SimImages/replayButton.png");
    this.load.image("replaybuttonhover", "/assets/GameSceneAssets/SimImages/replayButtonHover.png");
    this.load.image("speechbubble", "/assets/GameSceneAssets/SimImages/Speech Bubble.png");

  }
}
