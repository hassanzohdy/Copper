// animations.ts

export function displayLoadingBar(iterations = 20, delay = 100) {
  process.stdout.write("Loading: |");
  let current = 0;

  const interval = setInterval(() => {
    if (current >= iterations) {
      process.stdout.write("| Done!\n");
      clearInterval(interval);
    } else {
      process.stdout.write("=");
      current++;
    }
  }, delay);
}

export function displayThreeDotsAnimation(iterations = 3, delay = 1000) {
  let current = 0;

  const interval = setInterval(() => {
    if (current >= iterations) {
      process.stdout.clearLine(0);
      process.stdout.cursorTo(0);
      current = 0;
    }

    process.stdout.write("...");
    current++;
  }, delay);
}
