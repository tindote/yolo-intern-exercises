const fs = require('fs');
const path = require('path');
const mapping = {
  'Easy': {
    'Exercise_01.js': ['swap3Number'],
    'Exercise_02.js': ['calculatePow'],
    'Exercise_03.js': ['test'],
    'Exercise_04.js': ['countEven'],
    'Exercise_05.js': ['countEven'],
    'Exercise_06.js': ['sumEven'],
    'Exercise_07.js': ['sumOdd'],
    'Exercise_08.js': ['checkPrime'],
    'Exercise_09.js': ['getRemainder'],
    'Exercise_10.js': ['findMax'],
    'Exercise_11.js': ['findMin'],
    'Exercise_12.js': ['findAverage'],
    'Exercise_13.js': ['reverseArray'],
    'Exercise_14.js': ['findIndex'],
    'Exercise_15.js': ['calculateFactorial']
  },
  'Medium': {
    'Bai1.js': ['sortArrayByString'],
    'Bai2.js': ['connectTwoArrays'],
    'Bai3.js': ['calculateSumTwoArray'],
    'Bai4.js': ['calculateSubTwoArray'],
    'Bai5.js': ['calculateTimeTwoArray'],
    'Bai6.js': ['calculateDiviseTwoArray'],
    'Bai7.js': ['subArray'],
    'Bai8.js': ['findStringInString'],
    'Bai9.js': ['countElements'],
    'Bai10.js': ['countDifferentElements'],
    'Bai11.js': ['getRandomValue'],
    'Bai12.js': ['getRandomValue'],
    'Bai13.js': ['calculateHotelCost'],
    'Bai14.js': ['countElements'],
    'Bai15.js': ['sumDigits'],
    'Bai16.js': ['displayFibonacci'],
    'Bai17.js': ['cutString'],
    'Bai18.js': ['cutStringByStartAndLength']
  },
  'Hard': {
    'Bai1.js': ['reverseWord', 'reverseCharInWords', 'runTest'],
    'Bai2.js': ['getRandomNumber'],
    'Bai3.js': ['mergeSortedArraysAsc', 'runTest'],
    'Bai4.js': ['mergeSortedArraysDec', 'runTest'],
    'Bai5.js': ['mergeSortedArraysDecToAsc', 'runTest'],
    'Bai6.js': ['readHundred', 'readMillion', 'convertMoneyFromNumberToString', 'runTest'],
    'Bai7.js': ['moneyExchange', 'printMoneyExchange'],
    'Bai8.js': ['escapeRegex', 'countStrAInStrB'],
    'Bai9.js': ['shuffleArray', 'runTest'],
    'Bai10.js': ['lastNonZeroDigit'],
    'Bai11.js': ['countTrailingZeros']
  }
};

Object.entries(mapping).forEach(([dir, files]) => {
  Object.entries(files).forEach(([file, names]) => {
    const filePath = path.join(__dirname, dir, file);
    if (!fs.existsSync(filePath)) {
      console.warn('Missing file:', filePath);
      return;
    }
    const content = fs.readFileSync(filePath, 'utf8');
    if (/module\.exports\s*=/.test(content)) {
      console.log('Already exported:', filePath);
      return;
    }
    const exportLine = names.length === 1
      ? `\nmodule.exports = ${names[0]};\n`
      : `\nmodule.exports = { ${names.join(', ')} };\n`;
    fs.appendFileSync(filePath, exportLine, 'utf8');
    console.log('Export added to:', filePath);
  });
});
