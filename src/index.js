module.exports = function check(str, bracketsConfig) {
  let openBrackets = [];
  let closeBrackets = [];
  let strArr = [...str];
  let stack = [];

  for (let i = 0; i < bracketsConfig.length; i++) {
    openBrackets.push(bracketsConfig[i][0]);
    closeBrackets.push(bracketsConfig[i][1]);
  }

  strArr.forEach(function (el) {
    if (
      openBrackets.indexOf(el) >= 0 &&
      (closeBrackets.indexOf(el) < 0 || stack.indexOf(el) < 0)
    ) {
      stack.push(el);
      return;
    }
    if (
      closeBrackets.indexOf(el) >= 0 &&
      openBrackets[closeBrackets.indexOf(el)] === stack[stack.length - 1]
    ) {
      stack.pop();
      return;
    } else {
      stack.push(el);
    }
  });
  return stack.length === 0;
};
