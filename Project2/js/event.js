'use strict'

let blockBody = document.body;
let btnChangeColor = document.querySelector('btn-change_color');
let btnsAction = document.querySelectorAll('[data-purpose="action"]');
let btnSend;
// function changeBodyColor() {
//   // blockBody.style.background = 'green';
//   blockBody.classList.add('background-green'); 
// }
// console.log(blockBody);

// btnChangeColor.onclick = changeBodyColor;

//  const btnAddText = document.querySelector('[data-action="add-text"]');


//  function addTextOnBlock() {
//   let newBlock = document.createElement('p');
//   newBlock.innerText = "Our stydent is the best";

//   let parentBtnBlock = btnAddText.parentElement;
//   parentBtnBlock.insertAdjacentElement('beforeend', newBlock);
//   console.log(parentBtnBlock);
//  }
// //  var elements2 = document.getElementsByTagName('a[data-purpose]');

// //  blockCurrency.forEach(item => {
// //    let someCurrency = item.getAttribute('data-currency');
// //    let titleCurrency = item.getAttribute('data-title');
// //    blockCurrency.insertAdjacentHTML('beforeend', `<p>Course: ${someCurrency} ${titleCurrency}`);
// //  });
// btnAddText.addEventListener("click", addTextOnBlock())t

btnsAction.forEach(btn => btn.textContent === "Send" ? btnSend = btn : '');

let checkDataEvent = (event) => console.log("event is: ", event);

// btnSend.addEventListener("click", checkDataEvent);


let inputAmount = document.querySelector('#input-amount');
// inputAmount.addEventListener('keypress', checkDataEvent);

let btnsCurrency = Array.from(document.querySelectorAll('#btns-currency'));

btnsCurrency.forEach(() => {
  blockBody.onclick = (event) => {
    event.preventDefault();
    if (event.target.dataset.currency) {
      let dataCurrency = event.target.dataset.purpose;
      alert(`OLd ${dataCurrency}`);
    };
  }
});

btnsCurrency.forEach(btn => {
  btn.addEventListener('click', () => {
    console.log("btn.getAttribute(): ", btn.getAttribute());
    let currentCurrency = btn.getAttribute('data-currency');

    // if (event.target.dataset.currency) {
    //   let dataCurrency = event.target.dataset.currency;
    //   alert(`New ${dataCurrency}`);
    // };

    console.log("inputAmount.value : ", inputAmount.value);
    console.log("currentCurrency: ", currentCurrency);
let result = (inputAmount.value / currentCurrency).toFixed(2);
    console.log("result is: ", result);

  })
});

// console.log("btnSend: ", btnsCurrency);