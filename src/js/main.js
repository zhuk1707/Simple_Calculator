const calculator = document.querySelector('.calculator__body')
const result = document.querySelector('.calculator__screen')

calculator.addEventListener('click', function(event) {
  if (!event.target.classList.contains('calculator__btn')) return

  let buttonValue = event.target.innerText

  switch (buttonValue) {
    case 'AC':
      result.innerText = '';
      return;
    
    case 'C' :
      let array = result.innerText.split('')
      let popped = array.pop()
      result.innerText = array.join('')
      if (result.innerText.length === 0) {
        result.innerText = '0'
      }
      return;
      
    case '=':
      if (result.innerText.search(/[^0-9*/+\-.]/mi) !== -1) return;
      
      result.innerText = eval(result.innerText)
      
      return;
      
    case '%':
      result.innerText = result.innerText / 100
      return;
      
    default:
      result.innerText += buttonValue
  }

})

