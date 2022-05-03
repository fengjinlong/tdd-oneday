import { parse } from "./parse";

export function parseArgs(options, args) {
  const keys = Object.keys(options);
  return keys.reduce((result, key) => {
    result[key] = parse(options, key, args);
    return result;
  }, {});
}
