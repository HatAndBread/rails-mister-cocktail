import c from 'chinpunkanpun';
import s from 's2pd';
import groundPath from '../../../assets/images/ground.png';
import cloudsPath from '../../../assets/images/clouds.png';
import heroPath from '../../../assets/images/character.png';

const subTitle = document.querySelector('.subtitle');
const descriptions = Array.from(document.querySelectorAll('.description'));
subTitle.innerText = c.sentence();

descriptions.forEach((description) => {
  description.innerText = c.sentence() + ' ' + c.sentence();
});

const canvas = document.querySelector('canvas');
s.addCanvas(canvas, window.innerWidth, window.innerHeight * 0.4);
s.stillCanvas();
s.backgroundColor('rgb(140,224,98)');
s.listenForMouse();
const clouds = new s.Background(cloudsPath);
const ground = new s.Tile(groundPath, 0, 10, 0, 1);
ground.yPos = s.height - 30;
ground.platform(true);
const hero = new s.Sprite(40, ground.yPos - 150, heroPath, 35, 4);

hero.addAnimation('only', 0, 7);
hero.changeAnimationTo('only');
hero.feelGravity();
s.onClick(() => {
  hero.jump(20, true);
});
clouds.velX = 1;
s.keyUp('space', () => {
  sprite.jump(200, true); // will make sprite jump 200 pixels.
});
s.onResize(() => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight * 0.4;
  ground.yPos = canvas.height - 30;
  hero.yPos = ground.yPos - 150;
});
s.loop(() => {});
