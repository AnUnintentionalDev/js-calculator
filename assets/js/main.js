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
        return;
      }

      if (btnDataId == 'delete'){
        enteredVal.innerHTML = enteredVal.innerHTML.slice(0, -1);
        return;
      }

      if (btnDataId == '=') {
        doCalculation(btnDataId);
      }

      if (enteredVal.innerHTML == '0'){
        enteredVal.innerHTML = '';
      }

      blankVal = true;
      enteredVal.innerHTML += e.target.innerHTML;
    });
  });

  function doCalculation(operator){
    const finalVal = eval(enteredVal.innerHTML);
    finalResult.innerHTML = finalVal;
  }

});