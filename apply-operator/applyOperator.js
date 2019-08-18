
function applyOperator() {
  
  
  if (arguments.length === 0) 
    throw new Error("no");
  else if (arguments.length === 1)
    return 0 ;
  else if (arguments.length === 2) {
    if(arguments[0] === '-')
      return (-arguments[1]);
    return(arguments[1]);
  }
  else {
    const op = arguments[0];
    var n1 = (op === '-') ? -arguments[1] : arguments[1];

    var result;
    for(var i=2 ; i < arguments.length ; i++ ) {
      switch(op) {
        case '+':
            result = n1 + arguments[i];
            break;
        case '-':
            result = n1 - arguments[i];
            break;
        case '*':
            result = n1 * arguments[i];
            break;
        case '/':
            result = n1 / arguments[i];
            result = +result.toFixed(4);
            break;
        case '%':
            result = n1 % arguments[i];
            break;
        default:
            break;
      }
      n1 = result;
    }
      
    return result;
  }
    
  
}

export {
  applyOperator,
};
