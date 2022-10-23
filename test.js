const myFunc = (letterOne, letterTwo) => {
  let codeLetterOne = letterOne.charCodeAt(0);
  const codeLetterTwo = letterTwo.charCodeAt(0);

  setInterval(() => {
    codeLetterOne <= codeLetterTwo && console.log(String.fromCharCode(codeLetterOne++));
  }, 1000);
};

myFunc("A", "Z");
