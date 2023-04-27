(function () {
  'use strict';
  const personInputList = document.getElementsByName('person');
  const personBtn = document.getElementById('person');
  const citySelect = document.getElementById('city-select');
  const cityBtn = document.getElementById('city');
  const educationInputList = document.getElementsByName('education');
  const educationBtn = document.getElementById('education');
  const placeInputList = document.getElementsByName('place of study');
  const placeBtn = document.getElementById('place-of-study');
  const formatInputList = document.getElementsByName('study format');
  const formatBtn = document.getElementById('study-format');
  const paidInputList = document.getElementsByName('paid training');
  const paidBtn = document.getElementById('paid-training');
  const specialitySelect = document.getElementById('speciality-select');
  const specialityBtn = document.getElementById('speciality');
  const timeInputList = document.getElementsByName('arrival time');
  const timeBtn = document.getElementById('arrival-time');
  const nameInput = document.getElementById('nameInput');
  const numberInput = document.getElementById('numberInput');
  const emailInput = document.getElementById('emailInput');
  const finalBtn = document.getElementById('final');
  let nameValue;
  let numberValue;
  let emailLalue;

  for (let i = 0; i < personInputList.length; i++) {
    personInputList[i].addEventListener('click', () => {
      handleNextForm(personBtn);
      handleActiveInput(personInputList, i);
    })
  }

  citySelect.addEventListener('change', () => {
    handleNextForm(cityBtn);
  })

  for (let i = 0; i < educationInputList.length; i++) {
    educationInputList[i].addEventListener('click', () => {
      handleNextForm(educationBtn);
      handleActiveInput(educationInputList, i);
    })
  }

  for (let i = 0; i < placeInputList.length; i++) {
    placeInputList[i].addEventListener('click', () => {
      handleNextForm(placeBtn);
      handleActiveInput(placeInputList, i);
    })
  }

  for (let i = 0; i < formatInputList.length; i++) {
    formatInputList[i].addEventListener('click', () => {
      handleNextForm(formatBtn);
      handleActiveInput(formatInputList, i);
    })
  }
  
  for (let i = 0; i < paidInputList.length; i++) {
    paidInputList[i].addEventListener('click', () => {
      handleNextForm(paidBtn);
      handleActiveInput(paidInputList, i);
    })
  }

  specialitySelect.addEventListener('change', () => {
    handleNextForm(specialityBtn);
  })

  for (let i = 0; i < timeInputList.length; i++) {
    timeInputList[i].addEventListener('click', () => {
      handleNextForm(timeBtn);
      handleActiveInput(timeInputList, i);
    })
  }

  function handleNextForm (nextButton) {
    nextButton.classList.add('form__next--active');
    nextButton.removeAttribute('disabled')
  }

  function handleActiveInput (inputList, index) {
    for (let i = 0; i < inputList.length; i++) {
      if (inputList[i].parentNode.classList.contains('form__label--active')) {
        inputList[i].parentNode.classList.remove('form__label--active');
      }
    }
    inputList[index].parentNode.classList.add('form__label--active');
  }

  nameInput.addEventListener('input', () => {
    nameValue = nameInput.value;
    addFillingCheck();
  })

  numberInput.addEventListener('input', () => {
    numberValue = numberInput.value;
    addFillingCheck();
  })

  emailInput.addEventListener('input', () => {
    emailLalue = emailInput.value;
    addFillingCheck();
  })

  function addFillingCheck() {
    if (nameValue && numberValue && emailLalue) {
      handleNextForm(finalBtn);
    }
  }

})()