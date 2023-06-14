function fizzBuzz(number) {
    let output = '';
    let color = '';
  
    if (number % 3 === 0) {
      output += 'FIZZ';
      color = 'coral';
    }
  
    if (number % 5 === 0) {
      output += 'BUZZ';
      color = 'violet';
    }
  
    if (!output) {
      color = 'lightgreen';
      output = number;
    }
  
    return { output, color };
  }
  
  // ELEMENTO DIV DI OUTPUT AL DOM
  const outputDiv = document.getElementById('output');

  // COLORE SFONDO PAGINA
  document.body.style.backgroundColor = 'teal';
  
  // NUMERI DA 1 A 100
  for (let i = 1; i <= 100; i++) {
  // CREA DIV PER OGNI NUMERO
    const box = document.createElement('div');
    box.classList.add('box');
  
  // TESTO E COLORE DIV IN BASE AL OUTPUT FIZZBUZZ
    const { output, color } = fizzBuzz(i);
    box.textContent = output;

  // COLORE SFONDO FIZZBUZZ 
    if (output === 'FIZZBUZZ') {
      box.style.backgroundColor = 'orange'; 
    } else {
      box.style.backgroundColor = color;
    }
  
  // AGGIUNGI IL DIV AL CONTAINER DI OUTPUT
    outputDiv.appendChild(box);
  }