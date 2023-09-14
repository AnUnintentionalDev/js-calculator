window.addEventListener("load", (event) => {
  let blankVal = false;

  let enteredVal = document.getElementById('calc-entered-val');
  let finalResult = document.getElementById('calc-result');

  const allBtns = document.querySelectorAll('.calc-btn-data-id');

  Array.from(allBtns).forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const btnDataId = e.target.dataset.id;

      if ((btnDataId == '+' || btnDataId == '-' || btnDataId == '*' || btnDataId == '/' || btnDataId == '%')){
        if (!blankVal){
          return;
        }

        doCalculation(btnDataId);
      }

      if (btnDataId == 'reset') {
        enteredVal.innerHTML = '0';
        finalResult.innerHTML = '';
        enteredVal.style.fontSize = '24px';
        finalResult.style.fontSize = '18px';
        return;
      }

      if (btnDataId == 'delete'){
        enteredVal.style.fontSize = '24px';
        finalResult.style.fontSize = '18px';
        enteredVal.innerHTML = enteredVal.innerHTML.slice(0, -1);
        finalResult.innerHTML = '';
        return;
      }

      if (btnDataId == '=') {
        doCalculation(btnDataId);
      }

      if (enteredVal.innerHTML == '0'){
        enteredVal.innerHTML = '';
      }

      blankVal = true;
      enteredVal.innerHTML += e.target.innerHTML.trim() == 'percent' ? '%' : e.target.innerHTML;
      
      if (enteredVal.innerHTML.includes('=')) {
        enteredVal.innerHTML = enteredVal.innerHTML.slice(0, enteredVal.innerHTML.length - 1);
      }
    });
  });

  function doCalculation(operator){
    if (operator == '='){
      const finalVal = eval(enteredVal.innerHTML);
      enteredVal.style.fontSize = '18px';
      finalResult.style.fontSize = '24px';
      finalResult.innerHTML = finalVal;
    }
  }

});