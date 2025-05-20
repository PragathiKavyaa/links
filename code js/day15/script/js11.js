function readData() {
  try {
    
    throw new Error('Something went wrong while reading data');
  } catch (error) {
    console.error('Caught error:', error.message);
  } finally {
    console.log('Cleanup: Closing file or releasing resources');
  }
}

readData();