let newAdviceBtn = document.querySelector('#advice-new');
let advice = document.querySelector('.advice-text');
let adviceId = document.querySelector('.advice-id-number');

const generateRandomAdvice = async () => {
  const response = await fetch('https://api.adviceslip.com/advice');
  const randomAdvice = await response.json();
  advice.innerHTML = randomAdvice.slip.advice;
  adviceId.innerHTML = randomAdvice.slip.id;
};

newAdviceBtn.addEventListener('click', function () {
  generateRandomAdvice();
});

generateRandomAdvice();
