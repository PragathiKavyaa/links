function loopWithDebugger() {
  for (let i = 0; i < 5; i++) {
    console.log('Loop index:', i);
    
    if (i === 2) {
      debugger; 
    }
  }
}

loopWithDebugger();