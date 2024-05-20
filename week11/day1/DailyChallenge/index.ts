
function processInput(input: number | string | boolean): number | string | boolean {
  
    if (typeof input === 'number') {
      return input * input;
    }
    else if (typeof input === 'string') {
      return input.toUpperCase();
    }
    else if (typeof input === 'boolean') {
      return !input;
    }
    else {
      throw new Error('Unsupported type');
    }
  }
  
  console.log(processInput(15));        
  console.log(processInput("hello"));  
  console.log(processInput(true));     
  