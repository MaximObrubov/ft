
function checkSyntax(s) {
  const brackets = {
          "<": ">",
          "[": "]",
          "{": "}",
          "(": ")",
        };
  let antiRe = [],
      re = [];
  
  Object.entries(brackets).forEach((pair, i) => {
    antiRe.push(pair.map((b) => `\\${b}`).join("|"));
    re.push(pair.map((b) => `\\${b}`).join(""));
  });

  antiRe = new RegExp(`[^${antiRe.join("|")}]`, "g"); // всё, кроме скобок
  re = new RegExp(`${re.join("|")}`); // идущие подряд пары открывающей и закрывающей скобки
  s = s.replace(antiRe, '');
  
  // чикаем пары скобок пока чикается
  while(s.match(re)) s = s.replace(re, "");
  return s.length === 0 ? 0 : 1;
}


console.log(checkSyntax("---(++++)----") == 0);
console.log(checkSyntax("") == 0);
console.log(checkSyntax("before ( middle []) after ") == 0);
console.log(checkSyntax(") (") == 1);
console.log(checkSyntax("} {") == 1);
console.log(checkSyntax("<(   >)") == 1);
console.log(checkSyntax("(  [  <>  ()  ]  <>  )") == 0);
console.log(checkSyntax("   (      [)") == 1);