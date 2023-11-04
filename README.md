# Copper

Copper is a package that is used to display variant CLI output messages.

## Features

- Node.js v6+ & browsers support. Support for both CJS and ESM projects.
- TypeScript type declarations included.
- [`NO_COLOR`](https://no-color.org/) friendly.
- `+20` colors are supported in variant styles.

## Installation

`yarn add @mongez/copper`

Or

`npm i @mongez/copper`

## Using Colors

Colors are originally copied from [picocolors](https://github.com/alexeyraspopov/picocolors) but added many colors and styles for it.

Copper provides an object which includes a variety of text coloring and formatting functions

```javascript
import { colors } from "@mongez/copper";
```

The object includes following coloring functions: `black`, `red`, `green`, `yellow`, `blue`, `magenta`, `cyan`, `white`, `gray`.

```javascript
console.log(
  `I see a ${colors.red("red door")} and I want it painted ${colors.black(
    "black"
  )}`
);
```

The object also includes following background color modifier functions: `bgBlack`, `bgRed`, `bgGreen`, `bgYellow`, `bgBlue`, `bgMagenta`, `bgCyan`, `bgWhite`.

```javascript
console.log(
  colors.bgBlack(
    colors.white(
      `Tom appeared on the sidewalk with a bucket of whitewash and a long-handled brush.`
    )
  )
);
```

Besides colors, the object includes following formatting functions: `dim`, `bold`, `hidden`, `italic`, `underline`, `strikethrough`, `reset`, `inverse`.

```javascript
for (let task of tasks) {
  console.log(
    `${colors.bold(task.name)} ${colors.dim(task.durationMs + "ms")}`
  );
}
```

The library provides additional utilities to ensure the best results for the task:

- `isColorSupported` — boolean, explicitly tells whether or not the colors or formatting appear on the screen

  ```javascript
  import { colors } from "@mongez/copper";

  if (colors.isColorSupported) {
    console.log("Yay! This script can use colors and formatters");
  }
  ```

- `createColors(enabled)` — a function that returns a new API object with manually defined color support configuration

  ```javascript
  import { colors } from "@mongez/copper";

  let { red, bgWhite } = colors.createColors(options.enableColors);
  ```

## Colors List

- Basic: `white` `whiteBright` `blackBright` `black` `gray`
- Red: `red` `redBright` `bgRed` `bgRedBright`
- Slate: `slate` `slateBright` `bgSlate` `bgSlateBright`
- Blue: `blue` `blueBright` `bgBlue` `bgBlueBright`
- Green: `green` `greenBright` `bgGreen` `bgGreenBright`
- Lime: `lime` `limeBright` `bgLime` `bgLimeBright`
- Teal: `teal` `tealBright` `bgTeal` `bgTealBright`
- Cyan: `cyan` `cyanBright` `bgCyan` `bgCyanBright`
- Yellow: `yellow` `yellowBright` `bgYellow` `bgYellowBright`
- Brown: `brown` `brownBright` `bgBrown` `bgBrownBright`
- Chocolate: `chocolate` `chocolateBright` `bgChocolate` `bgChocolateBright`
- Magenta: `magenta` `magentaBright` `bgMagenta` `bgMagentaBright`
- Pink: `pink` `pinkBright` `bgPink` `bgPinkBright`
- Purple: `purple` `purpleBright` `bgPurple` `bgPurpleBright`
- Orange: `orange` `orangeBright` `bgOrange` `bgOrangeBright`
- Gold: `gold` `goldBright` `bgGold` `bgGoldBright`
- Lavender: `lavender` `lavenderBright` `bgLavender` `bgLavenderBright`
- Indigo: `indigo` `indigoBright` `bgIndigo` `bgIndigoBright`

## Replacing `chalk`

1. Replace package name in import:

   ```diff
   - import chalk from 'chalk'
   + import { colors } from "@mongez/copper";
   ```

2. Replace variable:

   ```diff
   - chalk.red(text)
   + colors.red(text)
   ```

3. Replace chains to nested calls:

   ```diff
   - chalk.red.bold(text)
   + colors.red(colors.bold(text))
   ```

4. You can use [`colorize-template`](https://github.com/usmanyunusov/colorize-template)
   to replace chalk’s tagged template literal.

   ```diff
   + import { createColorize } from 'colorize-template'

   + let colorize = createColorize(colors)
   - chalk.red.bold`full {yellow ${"text"}}`
   + colorize`{red.bold full {yellow ${"text"}}}`
   ```
