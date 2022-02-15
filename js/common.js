class MultiKeyMap {
  constructor(numKeys) {
    console.assert(!Number.isNaN(numKeys));

    this.numKeys = numKeys;
    this.map = new Map();
  }

  has(keys) {
    console.assert(Array.isArray(keys) && keys.length > 0);

    let currMap = this.map;

    for (let i = 0; i < keys.length - 1; i++) {
      if (!currMap.has(keys[i])) return false;

      currMap = currMap.get(keys[i]);
    }

    return currMap.has(keys[keys.length - 1]);
  }

  get(keys) {
    console.assert(Array.isArray(keys) && keys.length > 0);

    let currMap = this.map;

    for (let i = 0; i < keys.length - 1; i++) {
      if (!currMap.has(keys[i])) return undefined;

      currMap = currMap.get(keys[i]);
    }

    return currMap.get(keys[keys.length - 1]);
  }

  set(keys, value) {
    console.assert(Array.isArray(keys) && keys.length > 0);

    let currMap = this.map;

    for (let i = 0; i < keys.length - 1; i++) {
      if (!currMap.has(keys[i])) currMap.set(keys[i], new Map());

      currMap = currMap.get(keys[i]);
    }

    currMap.set(keys[keys.length - 1], value);
  }
}

function computeAbsError(expected, got) {
  console.assert(!Number.isNaN(expected) && !Number.isNaN(got));
  return Math.abs(1 - got / expected);
}

function isMoreOrLessAnInteger(num) {
  if (Number.isInteger(num)) return true;

  if (num % 1 < 0.0000000001) return true;

  return false;
}

function numRoundToBestOf(num, maxDecimalPlaces) {
  console.assert(!Number.isNaN(num));
  console.assert(!Number.isNaN(maxDecimalPlaces));

  if (isMoreOrLessAnInteger(num)) {
    return num.toFixed(0);
  }

  let i = 0;
  for (; i < maxDecimalPlaces; i++) {
    if (Number.parseFloat(num.toFixed(i)) === Number.parseFloat(num.toFixed(i + 1))) {
      break;
    }
  }

  return num.toFixed(i);
}

function toStringWithSuffix(num, maxDecimalPlaces = 16) {
  console.assert(!Number.isNaN(num));

  const suffixTable = new Map([
    ["-6", "M"],
    ["-3", "k"],
    ["3", "m"],
    ["6", "u"],
    ["9", "n"],
    ["12", "p"],
  ]);

  let origNum = num;

  let count = 0;

  let isNegative = num < 0;
  if (isNegative) {
    num *= -1;
  }

  while (num >= Math.pow(10, 3)) {
    num *= Math.pow(10, -3);
    count -= 3;
  }

  while (num < 1) {
    num *= Math.pow(10, 3);
    count += 3;
  }

  if (isNegative) {
    num *= -1;
  }

  if (suffixTable.has(count.toString())) {
    return numRoundToBestOf(num, maxDecimalPlaces) + suffixTable.get(count.toString());
  }

  return numRoundToBestOf(origNum, maxDecimalPlaces);
}

function fromStringWithSuffix(strNum) {
  console.assert(typeof strNum === "string" || strNum instanceof String);

  let num = Number.parseFloat(strNum);

  const suffixTable = new Map([
    ["M", Math.pow(10, 6)],
    ["k", Math.pow(10, 3)],
    ["m", Math.pow(10, -3)],
    ["u", Math.pow(10, -6)],
    ["n", Math.pow(10, -9)],
    ["p", Math.pow(10, -12)],
  ]);

  let lastChar = strNum[strNum.length - 1];
  let allButLastChar = strNum.substring(0, strNum.length - 1);

  if (!Number.isNaN(Number.parseInt(lastChar))) return Number.parseFloat(strNum);

  console.assert(suffixTable.has(lastChar));
  return Number.parseFloat(allButLastChar) * suffixTable.get(lastChar);
}
