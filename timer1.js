// Create an alarm function that takes in unlimited number of args from the command line
// 1. define process.argv
const args = process.argv.slice(2);
// console.log(args);

// 2. define the func def, taking in the args array
const timer1 = (args) => {
  // Edge 1: if there are no num, don't run
  if (args.length === 0) return console.log("No Arguments. Exiting.");
  
  // 3. loop through the args array, and each num, pass that argument to setTimeout()'s delay
  args.forEach((num) => {
    num = Number(num);
    // Edge 2: need to make sure num is a number... but remember num is a string, but if we coerce Number(num) === NaN, typeof NaN is still a 'number'
    // Edge 3: if integer negative dont run
    if (isNaN(num) || num <= 0) return console.log("Not a number or Negative Integer. Exiting.");


    // 4. at each num, adds the setTimeout() below to the callback Q and waits to bell us
    setTimeout(() => {
      process.stdout.write("\x07")
      // 5. at exactly, num * 1000ms (gives us the seconds)
    }, num * 1000);
  });
};

timer1(args);