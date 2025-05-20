function processUserData(user) {
  if (!user) {
    console.error('Error: No user data provided');
    return;
  }

  if (!user.name) {
    console.warn('Warning: User name is missing');
  }

  if (user.age < 0) {
    console.error('Error: Invalid age value');
    return;
  }

  console.log('User processed:', user);
}

processUserData({ name: 'Alice', age: -5 });