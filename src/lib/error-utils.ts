
// Utility functions for testing error scenarios

/* 
// Commented out to prevent build errors, but kept for testing purposes
// Function with intentional syntax error (missing closing parenthesis
export const brokenFunction = () => {
  console.log("This function has a syntax error"
  
  // The error is above - missing closing parenthesis

  return "This will never execute";
};
*/

// Fixed version that won't break the build
export const brokenFunction = () => {
  console.log("This function has a syntax error"); // Fixed with closing parenthesis
  return "This will execute now";
};

// Another function with a different type of syntax error - fixed to not break the build
export const anotherBrokenFunction = () => {
  const x = {
    a: 1,
    b: 2,
    c: 3 // Removed trailing comma
  }

  return x;
};

export const validFunction = () => {
  return "This function works correctly";
};
