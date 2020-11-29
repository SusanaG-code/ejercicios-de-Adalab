let avocados;
const avocadoPrice = 1.5;
const money = 33;

if (money >= avocadoPrice) {
  avocados = money / avocadoPrice;
} else {
  avocados = 0;
}


//ternario
//condition ?  = money >=avocadoPrice
//true = money /avocados
//false (else) = '00
avocados = 
 money >= avocadoPrice ? 'money /avocados' : '0';
 console.log(avocados);


