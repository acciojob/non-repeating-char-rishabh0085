function firstNonRepeatedChar(str) {
  // Create an object to store character frequencies
  const charCount = {};

  // Count the occurrences of each character in the string
  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Iterate through the string to find the first non-repeated character
  for (let char of str) {
    if (charCount[char] === 1) {
      return char; // Found the first non-repeated character
    }
  }

  return null; // If all characters are repeated
}

const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
