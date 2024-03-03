// Function to generate a random number within a specified range
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Function to generate an array of random numbers
  function generateRandomArray(length, min, max) {
    const randomArray = [];
    for (let i = 0; i < length; i++) {
      randomArray.push(getRandomNumber(min, max));
    }
    return randomArray;
  }
  
  // Function to generate a random password
  function generateRandomPassword(length) {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = getRandomNumber(0, charset.length - 1);
      password += charset.charAt(randomIndex);
    }
    return password;
  }
  
  // Example usage
  const randomSingleNumber = getRandomNumber(1, 100);
  const randomArray = generateRandomArray(5, 10, 50);
  const randomPassword = generateRandomPassword(12);
  
  console.log(`Random Single Number: ${randomSingleNumber}`);
  console.log(`Random Array: ${randomArray}`);
  console.log(`Random Password: ${randomPassword}`);
  