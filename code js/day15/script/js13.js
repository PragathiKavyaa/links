function logErrorToLocalStorage(error) {
  const logKey = 'errorLogs';
  const timestamp = new Date().toISOString();
  const errorLog = {
    message: error.message,
    stack: error.stack,
    time: timestamp
  };

  const existingLogs = JSON.parse(localStorage.getItem(logKey)) || [];
  existingLogs.push(errorLog);

  localStorage.setItem(logKey, JSON.stringify(existingLogs));
}

function simulateApp() {
  try {
    
    throw new Error('Something went wrong in the app!');
  } catch (error) {
    console.error('Error caught:', error.message);
    logErrorToLocalStorage(error);
  }
}

simulateApp();