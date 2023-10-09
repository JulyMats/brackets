module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let isValid = true;

  for (let i = 0; i < str.length; i += 1) {
    bracketsConfig.map(e => {
      if(str[i] === e[0]) {
        if(e[0] === e[1] && stack[stack.length - 1] === e[0]) {
          stack.pop();
        } else {
          stack.push(e[1]);
        }
      } else if(str[i] === e[1]) {
        if(stack[stack.length - 1] === e[1]) {
          stack.pop();
        } else {
          isValid = false;
        }
      }
    });
    
    if(!isValid) {
      return isValid;
    }
  }
  return !stack.length;
}
