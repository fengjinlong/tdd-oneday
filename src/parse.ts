const map = initMap();

function initMap() {
  const map = new Map();
  map.set(Boolean, parseBoolean);
  map.set(Number, parseNumber);
  map.set(String, parseString);
  return map;
}

export function parse(options: any, key: string, args: any) {
  let parseHandler = map.get(options[key]);
  return parseHandler(args, key);
}
function getFlagValue(args, key) {
  const flagIndex = args.indexOf("-" + key);
  return args[flagIndex + 1];
}
function parseString(args: any, key: string, value: any) {
  return getFlagValue(args, key);
}

function parseNumber(args: any, key: string, value: any) {
  return getFlagValue(args, key) * 1;
}

function parseBoolean(args: any, key: string): any {
  return args.includes("-" + key);
}
