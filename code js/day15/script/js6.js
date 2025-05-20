function handleErrors(input) {
  try {
    
    if (typeof input !== 'string') {
      throw new TypeError('Outer Error: Input must be a string');
    }

    try {
      
      let parsed = JSON.parse(input);
      console.log('Parsed JSON:', parsed);
    } catch (innerError) {
      console.error('Inner Catch:', innerError.message);
    }

  } catch (outerError) {
    console.error('Outer Catch:', outerError.message);
  }
}
handleErrors(123)