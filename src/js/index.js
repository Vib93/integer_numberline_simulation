import "phaser";
import LoadScene from "./LoadScene";
import GameScene from "./GameScene";
import GameScene1 from "./GameScene1";
import StartScene from "./StartScene";
import TutorialScene from "./TutorialScene";
import EndScene from "./EndScene";



const gameState = {
  score: 0,
  attempted: 0, // will have to update this variable to be shown in the end screen
  questionNumber: 0,
  hints: 0,
  gameWin: false,
  gameAttempts: 0,
};

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 450,
  scale: {
    parent:"Game",
    mode: Phaser.Scale.NONE,
    autoCenter: Phaser.Scale.CENTER_HORIZONTALLY,
    verticalAlign: Phaser.Scale.TOP
  },
  zoom: 1,
  resolution: window.devicePixelRatio,
  fps: { target: 60 },
  backgroundColor: "ffffff",
  physics: {
    default: "arcade",
    
  },
  scene: [LoadScene, StartScene, TutorialScene, GameScene,GameScene1, EndScene],
  audio: {
    disableWebAudio: true,
  },
};



const game = new Phaser.Game(config);
export { gameState, config,game};