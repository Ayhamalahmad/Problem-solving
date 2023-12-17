export const pigIt = (a : string) : string =>  {
    const endLe: string = "ay";
    const lettersOnlyRegex: RegExp = /^[A-Za-z\s]+$/;
    return a.split(" ").map((word: string, index: number): string => {
        const firstLeter: string = word.charAt(0);
        return lettersOnlyRegex.test(word) ? word.slice(1) + firstLeter + endLe : word;
    }).join(" ");
  }
console.log(pigIt("Pig latin is cool")); // igPay atinlay siay oolcay
console.log(pigIt("Hello world !")); // elloHay orldway !