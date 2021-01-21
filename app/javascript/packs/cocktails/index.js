import c from 'chinpunkanpun';
import s from 's2pd';
import groundPath from '../../../assets/images/ground.png';
import cloudsPath from '../../../assets/images/clouds.png';
import heroPath from '../../../assets/images/character.png';
import mountainsPath from '../../../assets/images/mountains.png';
import cocktailPath from '../../../assets/images/cocktail.png';
import bgmPath from '../../../assets/audios/bgm';
import gameOverMusicPath from '../../../assets/audios/gameOverMusic';
import ouchPath from '../../../assets/audios/ouch';

let playingGame = false;
let gameOver = false;
const bgm = new s.Sound(bgmPath, 0.3, true, 1);
const gameOverMusic = new s.Sound(gameOverMusicPath, 0.6, false, 1);
const ouch = new s.Sound(ouchPath, 0.3, false, 1);
s.loadAudio();

const subTitle = document.querySelector('.subtitle');
const descriptions = Array.from(document.querySelectorAll('.description'));
subTitle.innerText = c.sentence();

descriptions.forEach((description) => {
  description.innerText = c.sentence() + ' ' + c.sentence();
});

const canvas = document.querySelector('canvas');
console.info(canvas);
const startButt = document.querySelector('#start-butt');
startButt.position = 'fixed';
startButt.addEventListener('click', () => {
  playingGame = true;
  gameOver = false;
  hero.changeAnimationTo('only');
  startButt.style.display = 'none';
  cocktails.forEach((cocktail) => (cocktail.xPos = s.randomBetween(500, 800)));
  timeText.text = `Time: 0`;
  bgm.play();
  gameOverMusic.stop();
});

s.addCanvas(canvas, 420, 220);
s.stillCanvas();
s.listenForMouse();
const clouds = new s.Background(cloudsPath);
const mountains = new s.Background(mountainsPath);
const ground = new s.Tile(groundPath, 0, 10, 0, 1);
ground.yPos = s.height - 30;
ground.platform(true);
const hero = new s.Sprite(40, ground.yPos - 150, heroPath, 35, 4);

hero.addAnimation('only', 0, 7);
hero.addAnimation('dead', 9, 1);
hero.changeAnimationTo('only');
hero.feelGravity(11);
hero.trimHitBox(18, 18, 0, 10);
const someText = new s.Text('red', 'center', 30, '', 'sans-serif', 28, 3, 'green');
const instructions = new s.Text('red', 'center', 30, '', 'sans-serif', 18);
let time = 0;

const timeText = new s.Text('red', 10, 30, `Time: ${Math.floor(time / 60)}`, 'sans-serif', 18);
someText.center = true;
s.onClick(() => {
  if (playingGame) {
    hero.jump(4, true);
  }
});
s.keyUp('space', () => {
  if (playingGame) {
    sprite.jump(230, true);
  }
});
const cocktails = [];
for (let i = 0; i < 2; i++) {
  const cocktail = new s.Sprite(s.randomBetween(500, 800), ground.yPos - 38, cocktailPath);
  s.onCollision(cocktail, hero, true, () => {
    playingGame = false;
    gameOver = true;
    hero.changeAnimationTo('dead');
    bgm.stop();
    ouch.play();
    gameOverMusic.play();
  });
  cocktails.push(cocktail);
}
ground.innerVelX = -1.5;
mountains.velX = -0.4;
clouds.velX = -0.1;

s.loop(() => {
  if (playingGame) {
    time += 1;
    timeText.text = `Time: ${Math.floor(time / 60)}`;
    someText.text = '';
    instructions.text = 'Click anywhere to jump';
    cocktails.forEach((cocktail) => (cocktail.velX = -4.4));
    ground.innerVelX = -1.5;
    mountains.velX = -0.4;
    clouds.velX = -0.1;
  } else {
    time = 0;
    instructions.text = '';
    someText.text = '';
    cocktails.forEach((cocktail) => (cocktail.velX = 0));
  }
  if (gameOver) {
    instructions.text = '';
    someText.text = '💀GAME OVER💀';
    ground.innerVelX = 0;
    mountains.velX = 0;
    clouds.velX = -0.1;
    startButt.innerText = 'Play again?';
    startButt.style.display = 'initial';
  }
  cocktails.forEach((cocktail) => {
    if (cocktail.xPos < -30) {
      cocktail.xPos = s.randomBetween(430, 950);
    }
  });
});
