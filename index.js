// A function to generate a random letter from A to Z
function randomLetter() {
    let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let index = Math.floor(Math.random() * letters.length);
    return letters[index];
  }
//add event listiner
  // A function to generate a random digit from 0 to 9
  function randomDigit() {
    return Math.floor(Math.random() * 10);
  }
  let a=2;
  console.log(a);
  // A function to generate a random fake PAN number
  function randomPAN() {
    let pan = "";
    // The first five characters are letters
    for (let i = 0; i < 5; i++) {
      pan += randomLetter();
    }
    // The next four characters are digits
    for (let i = 0; i < 4; i++) {
      pan += randomDigit();
    }
    // The last character is a letter
    pan += randomLetter();
    return pan;
  }
  
  // Test the function
  console.log(randomPAN());
  