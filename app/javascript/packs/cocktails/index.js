import c from 'chinpunkanpun';
const subTitle = document.querySelector('.subtitle');
const descriptions = Array.from(document.querySelectorAll('.description'));
subTitle.innerText = c.sentence();

console.log(descriptions);

descriptions.forEach((description) => {
  description.innerText = c.sentence() + ' ' + c.sentence();
});
