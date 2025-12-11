function Compute(op) {
   var num1 = parseFloat(document.getElementById('num1').value);
   var num2 = parseFloat(document.getElementById('num2').value);
   var result;
   if (isNaN(num1) || isNaN(num2)) {
      result = 'Error';
   } else {
      switch (op) {
         case '+':
            result = num1 + num2;
            break;
         case '-':
            result = num1 - num2;
            break;
         case '*':
            result = num1 * num2;
            break;
         case '/':
            if (num2 === 0) {
               result = 'Error';
            } else {
               result = num1 / num2;
            }
            break;
         default:
            result = 'Error';
      }
   }
   document.getElementById('result').value = result;
}
