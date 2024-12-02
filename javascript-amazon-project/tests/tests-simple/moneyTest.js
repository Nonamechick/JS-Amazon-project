import {formatCurrency} from '../../scripts/utils/money.js';

console.log('test suite: formatCurrency');
console.log('converts cents into dollars');
if (formatCurrency(2095) === '20.95') {
    console.log("Work fine");
} else {
    console.log("failed");
}

console.log('works with 0');
if (formatCurrency(0) ==='0.00') {
    console.log("Work fine1");
} else {
    console.log("failed1");
}

console.log('rounds up to the neareast cent');
if (formatCurrency(2000.5) === '20.01') {
    console.log("Work fine2");
} else {
    console.log("failed2");
}