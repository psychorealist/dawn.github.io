const btn = document.querySelector('.cl'); 
const txtOne = document.querySelector('.one');
const txtTwo = document.querySelector('.two');
const txtThree = document.querySelector('.three');
const txtFour = document.querySelector('.four');
const txtFive = document.querySelector('.five');
const txtSix = document.querySelector('.six');
const txtSeven = document.querySelector('.seven');
const txtEight = document.querySelector('.eight');
const txtNine = document.querySelector('.nine');
const txtTen = document.querySelector('.ten');
btn.onclick = function() {
    document.querySelector('.progress-bar').style.opacity = 0;
    document.querySelector('.progress').style.opacity = 0;
  document.querySelector('.terminal').style.color = 'white';
  document.querySelector('.cl').style.animation = 0 ;

};

btn.addEventListener('click', function (){
    txtOne.textContent = `In the eastern realm, I make my grand entrance, a celestial dance unfolds, a radiant `;
    txtTwo.textContent = `occurrence. I emerge with hues of amber and gold, casting shadows aside, secrets to dance, and a fantasy dance.`; 
    txtThree.textContent = `unfold.`; 
    txtFour.textContent = `I'm heralded by the birds in morning song, their melodies harmonize, a chorus strong. I make my grand entrance, a celestial dance unfolds, a radiant `;
    txtFive.textContent = `The world awakens as I ascend, painting the canvas of the sky, a masterpiece to `;
    txtSix.textContent = `comprehend.`;
    txtSeven.textContent = `I bring warmth and life to all I touch, chasing away darkness with a gentle clutch. `;
    txtEight.textContent = `A daily rebirth, a spectacle divine, illuminating the world, a symbol to define. `;
    txtNine.textContent = `Guess my identity as I rise, a cosmic artist with enchanting ties. I herald the start of a `;
    txtTen.textContent = `new day's story, an ancient, timeless, and splendid glory.`;
})

