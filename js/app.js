let rows = prompt('How many rows would you like in your pyramid?');
for (let i = 1; i <= rows; i++) {
  let str = ''.repeat(rows-i);
  str += '*'.repeat((2 * i) - 1);
  console.log(str);
}