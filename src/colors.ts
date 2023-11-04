// The file was originally copied from https://github.com/alexeyraspopov/picocolors
import tty from "tty";

const argv: string[] = process.argv || [];
const env: NodeJS.ProcessEnv = process.env;
export type Formatter = (input: string | number | null | undefined) => string;

const isColorSupported: boolean =
  !("NO_COLOR" in env || argv.includes("--no-color")) &&
  ("FORCE_COLOR" in env ||
    argv.includes("--color") ||
    process.platform === "win32" ||
    (typeof require === "function" && tty.isatty(1) && env.TERM !== "dumb") ||
    "CI" in env);

const formatter = (open: string, close: string, replace: string = open) => {
  const _formatter = (input: any): string => {
    const string: string = "" + input;
    const index: number = string.indexOf(close, open.length);
    return ~index
      ? open + replaceClose(string, close, replace, index) + close
      : open + string + close;
  };

  return _formatter as Formatter;
};

const replaceClose = (
  string: string,
  close: string,
  replace: string,
  index: number
): string => {
  const start: string = string.substring(0, index) + replace;
  const end: string = string.substring(index + close.length);
  const nextIndex: number = end.indexOf(close);
  return ~nextIndex
    ? start + replaceClose(end, close, replace, nextIndex)
    : start + end;
};

export const createColors = (enabled: boolean = isColorSupported) => ({
  isColorSupported: enabled,
  dim: enabled ? formatter("\x1b[2m", "\x1b[22m", "\x1b[22m\x1b[2m") : String,
  italic: enabled ? formatter("\x1b[3m", "\x1b[23m") : String,
  underline: enabled ? formatter("\x1b[4m", "\x1b[24m") : String,
  bold: enabled ? formatter("\x1b[1m", "\x1b[22m", "\x1b[22m\x1b[1m") : String,
  inverse: enabled ? formatter("\x1b[7m", "\x1b[27m") : String,
  hidden: enabled ? formatter("\x1b[8m", "\x1b[28m") : String,
  strikethrough: enabled ? formatter("\x1b[9m", "\x1b[29m") : String,
  reset: enabled ? (s: string) => `\x1b[0m${s}\x1b[0m` : String,

  // General Colors
  black: enabled ? formatter("\x1b[30m", "\x1b[39m") : String,
  blackBright: enabled ? formatter("\x1b[90m", "\x1b[39m") : String,
  gray: enabled ? formatter("\x1b[90m", "\x1b[39m") : String,
  white: enabled ? formatter("\x1b[37m", "\x1b[39m") : String,
  whiteBright: enabled ? formatter("\x1b[97m", "\x1b[39m") : String,

  // slate Color
  slate: enabled ? formatter("\x1b[38;5;242m", "\x1b[39m") : String,
  slateBright: enabled ? formatter("\x1b[38;5;188m", "\x1b[39m") : String,
  bgSlate: enabled ? formatter("\x1b[48;5;242m", "\x1b[49m") : String,
  bgSlateBright: enabled ? formatter("\x1b[48;5;188m", "\x1b[49m") : String,

  // Red Color
  red: enabled ? formatter("\x1b[31m", "\x1b[39m") : String,
  redBright: enabled ? formatter("\x1b[91m", "\x1b[39m") : String,
  bgRed: enabled ? formatter("\x1b[41m", "\x1b[49m") : String,
  bgRedBright: enabled ? formatter("\x1b[101m", "\x1b[49m") : String,

  // Orange Color
  orange: enabled ? formatter("\x1b[38;5;208m", "\x1b[39m") : String,
  orangeBright: enabled ? formatter("\x1b[38;5;220m", "\x1b[39m") : String,
  bgOrange: enabled ? formatter("\x1b[48;5;208m", "\x1b[49m") : String,
  bgOrangeBright: enabled ? formatter("\x1b[48;5;220m", "\x1b[49m") : String,

  // Yellow Color
  yellow: enabled ? formatter("\x1b[33m", "\x1b[39m") : String,
  yellowBright: enabled ? formatter("\x1b[93m", "\x1b[39m") : String,
  bgYellow: enabled ? formatter("\x1b[43m", "\x1b[49m") : String,
  bgYellowBright: enabled ? formatter("\x1b[103m", "\x1b[49m") : String,

  // Gold Color
  gold: enabled ? formatter("\x1b[38;5;214m", "\x1b[39m") : String,
  goldBright: enabled ? formatter("\x1b[38;5;226m", "\x1b[39m") : String,
  bgGold: enabled ? formatter("\x1b[48;5;214m", "\x1b[49m") : String,
  bgGoldBright: enabled ? formatter("\x1b[48;5;226m", "\x1b[49m") : String,

  // Chocolate Color
  chocolate: enabled ? formatter("\x1b[38;5;130m", "\x1b[39m") : String,
  chocolateBright: enabled ? formatter("\x1b[38;5;138m", "\x1b[39m") : String,
  bgChocolate: enabled ? formatter("\x1b[48;5;130m", "\x1b[49m") : String,
  bgChocolateBright: enabled ? formatter("\x1b[48;5;138m", "\x1b[49m") : String,

  // Brown Color
  brown2: enabled ? formatter("\x1b[38;5;94m", "\x1b[39m") : String,
  brown2Bright: enabled ? formatter("\x1b[38;5;130m", "\x1b[39m") : String,
  bgBrown2: enabled ? formatter("\x1b[48;5;94m", "\x1b[49m") : String,
  bgBrown2Bright: enabled ? formatter("\x1b[48;5;130m", "\x1b[49m") : String,

  // Green Color
  green: enabled ? formatter("\x1b[32m", "\x1b[39m") : String,
  greenBright: enabled ? formatter("\x1b[92m", "\x1b[39m") : String,
  bgGreen: enabled ? formatter("\x1b[42m", "\x1b[49m") : String,
  bgGreenBright: enabled ? formatter("\x1b[102m", "\x1b[49m") : String,

  // Lime Color
  limeGreen: enabled ? formatter("\x1b[38;5;118m", "\x1b[39m") : String,
  limeGreenBright: enabled ? formatter("\x1b[38;5;154m", "\x1b[39m") : String,
  bgLimeGreen: enabled ? formatter("\x1b[48;5;118m", "\x1b[49m") : String,
  bgLimeGreenBright: enabled ? formatter("\x1b[48;5;154m", "\x1b[49m") : String,

  // Teal Color
  teal: enabled ? formatter("\x1b[38;5;6m", "\x1b[39m") : String,
  tealBright: enabled ? formatter("\x1b[38;5;45m", "\x1b[39m") : String,
  bgTeal: enabled ? formatter("\x1b[48;5;6m", "\x1b[49m") : String,
  bgTealBright: enabled ? formatter("\x1b[48;5;45m", "\x1b[49m") : String,

  // Cyan Color
  cyan: enabled ? formatter("\x1b[36m", "\x1b[39m") : String,
  cyanBright: enabled ? formatter("\x1b[96m", "\x1b[39m") : String,
  bgCyan: enabled ? formatter("\x1b[46m", "\x1b[49m") : String,
  bgCyanBright: enabled ? formatter("\x1b[106m", "\x1b[49m") : String,

  // Blue Color
  blue: enabled ? formatter("\x1b[34m", "\x1b[39m") : String,
  blueBright: enabled ? formatter("\x1b[94m", "\x1b[39m") : String,
  bgBlue: enabled ? formatter("\x1b[44m", "\x1b[49m") : String,
  bgBlueBright: enabled ? formatter("\x1b[104m", "\x1b[49m") : String,

  // Magenta Color
  magenta: enabled ? formatter("\x1b[35m", "\x1b[39m") : String,
  magentaBright: enabled ? formatter("\x1b[95m", "\x1b[39m") : String,
  bgMagenta: enabled ? formatter("\x1b[45m", "\x1b[49m") : String,
  bgMagentaBright: enabled ? formatter("\x1b[105m", "\x1b[49m") : String,

  // Purple Color
  purple: enabled ? formatter("\x1b[38;5;129m", "\x1b[39m") : String,
  purpleBright: enabled ? formatter("\x1b[38;5;141m", "\x1b[39m") : String,
  bgPurple: enabled ? formatter("\x1b[48;5;129m", "\x1b[49m") : String,
  bgPurpleBright: enabled ? formatter("\x1b[48;5;141m", "\x1b[49m") : String,

  // Pink Color
  pink: enabled ? formatter("\x1b[38;5;205m", "\x1b[39m") : String,
  pinkBright: enabled ? formatter("\x1b[38;5;213m", "\x1b[39m") : String,
  bgPink: enabled ? formatter("\x1b[48;5;205m", "\x1b[49m") : String,
  bgPinkBright: enabled ? formatter("\x1b[48;5;213m", "\x1b[49m") : String,

  // Lavender Color
  lavender: enabled ? formatter("\x1b[38;5;183m", "\x1b[39m") : String,
  lavenderBright: enabled ? formatter("\x1b[38;5;189m", "\x1b[39m") : String,
  bgLavender: enabled ? formatter("\x1b[48;5;183m", "\x1b[49m") : String,
  bgLavenderBright: enabled ? formatter("\x1b[48;5;189m", "\x1b[49m") : String,

  // Indigo Color
  indigo: enabled ? formatter("\x1b[38;5;54m", "\x1b[39m") : String,
  indigoBright: enabled ? formatter("\x1b[38;5;63m", "\x1b[39m") : String,
  bgIndigo: enabled ? formatter("\x1b[48;5;54m", "\x1b[49m") : String,
  bgIndigoBright: enabled ? formatter("\x1b[48;5;63m", "\x1b[49m") : String,
});

export const colors = createColors();
