import c from 'chinpunkanpun';

const butt = document.getElementById('random-name-butt');
const field = document.querySelector('#text-field');

butt.addEventListener('click', () => {
  if (Math.floor(Math.random() * 2)) {
    field.value = `${c.getWord(c.adjective)} ${c.getWord(c.adjective)} ${c.getWord(c.singularNoun)}`;
  } else {
    field.value = `${c.getWord(c.adjective)} ${c.getWord(c.singularNoun)} ${c.getWord(c.singularNoun)}`;
  }
});
