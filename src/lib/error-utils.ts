
// Utility functions for testing error scenarios

// Function with intentional syntax error (missing closing parenthesis
export const brokenFunction = () => {
  console.log("This function has a syntax error"
  
  // The error is above - missing closing parenthesis

  return "This will never execute";
};

// Another function with a different type of syntax error
export const anotherBrokenFunction = () => {
  const x = {
    a: 1,
    b: 2,
    c: 3, // Extra comma that will cause an error in some JS environments
  }

  return x;
};

export const validFunction = () => {
  return "This function works correctly";
};
