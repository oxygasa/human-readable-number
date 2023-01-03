module.exports = function toReadable(n) {
    let b = n % 10, d = n % 100, a = (n - b) / 10, c = (n - d) / 100, //digit position
        A1 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'], //arrays about text name of digits
        A2 = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen',
            'sixteen', 'seventeen', 'eighteen', 'nineteen'],
        A3 = ['ten', 'twenty', 'thirty', 'forty', 'fifty',
            'sixty', 'seventy', 'eighty', 'ninety'],
        A4 = ['one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];
    if (n < 10) return A1[n]; // <10
    if (n === 10) return A3[0]; // 10
    if (n > 10 && n < 20) return A2[n - 11]; // from 10 till 20
    if (b === 0 && n < 100) return A3[a - 1]; // teens
    if (n > 20 && n < 100) return A3[a - 1] + ' ' + A1[b]; // from 20 till 99 except teens
    if (d === 0 && n > 99) return A4[c - 1]; // hundreds
    hundredTwoLastDigits = Number(Math.floor((n / 10) % 10).toString() + Math.floor((n / 1) % 10).toString()); // two last digits of hundreds
    if (!Math.floor(n / 100) % 10 === 0 && hundredTwoLastDigits < 10) return A4[c - 1] + ' ' + A1[hundredTwoLastDigits]; // hundreds +  <10
    if (!Math.floor(n / 100) % 10 === 0 && hundredTwoLastDigits === 10) return A4[c - 1] + ' ' + A3[0]; // hundreds + 10
    if (!Math.floor(n / 100) % 10 === 0 && hundredTwoLastDigits > 10 && hundredTwoLastDigits < 20) return A4[c - 1] + ' ' + A2[hundredTwoLastDigits - 11]; // hundreds + from 10 till 20
    e = hundredTwoLastDigits % 10; // digit position for hundreds
    f = (hundredTwoLastDigits - e) / 10; // digit position for hundreds
    if (!Math.floor(n / 100) % 10 === 0 && e === 0 && hundredTwoLastDigits <=99) return A4[c - 1] + ' ' +  A3[f - 1];  // hundreds + teens
    if (!Math.floor(n / 100) % 10 === 0 && hundredTwoLastDigits > 20 && hundredTwoLastDigits <=99) return A4[c - 1] + ' ' +  A3[f - 1] + ' ' + A1[e]; // hundreds + from 20 till 99 except teens
}
