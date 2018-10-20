nextPrime:
  for (let i = 2; i <= 100; i++) {

    for (let j = 2; j < i; j++) {
      if (i % j == 0) { continue nextPrime;
      
       }
     
    }
     document.write("Делители этого числа 1 и " + i + "<br>");
  }