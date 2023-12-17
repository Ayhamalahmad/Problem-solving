function pigIt(str) {
    const endLe = "ay";
    const lettersOnlyRegex = /^[A-Za-z\s]+$/;
    return str.split(" ").map((word, index) => {
      const firstLeter = word.charAt(0);
     return lettersOnlyRegex.test(word) ?  word.slice(1) + firstLeter + endLe :word;
    }).join(" ");
  }
  console.log(pigIt("Pig latin is cool")); // igPay atinlay siay oolcay
  console.log(pigIt("Hello world !")); // elloHay orldway !