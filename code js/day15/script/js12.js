function recursiveFunction(limit, count = 0) {
  if (count >= limit) {
    console.warn('Recursion stopped: limit reached');
    return;
  }

  console.log('Recursion count:', count);
  recursiveFunction(limit, count + 1);
}

recursiveFunction(5);