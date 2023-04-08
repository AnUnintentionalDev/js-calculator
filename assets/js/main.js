window.addEventListener("load", (event) => {
  let blankVal = '';

  let enteredVal = document.getElementById('calc-entered-val');
  let finalResult = document.getElementById('calc-result');

  const allBtns = document.querySelectorAll('.calc-btn');

  Array.from(allBtns).forEach((btn) => {
    
    btn.addEventListener('click', (e) => {
      enteredVal.innerHTML += e.target.innerHTML;

      const btnDataId = e.target.dataset.id;

      if (btnDataId == '+' || btnDataId == '-' || btnDataId == '*' || btnDataId == '/' || btnDataId == '%'){
        if (blankVal == ''){
          return;
        }
      }
    });
  });
});