module.exports = function toReadable(n) {
    let b = n % 10, d = n % 100, a = (n - b) / 10, c = (n - d) / 100,
        A1 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
        A2 = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen',
            'sixteen', 'seventeen', 'eighteen', 'nineteen'],
        A3 = ['ten', 'twenty', 'thirty', 'forty', 'fifty',
            'sixty', 'seventy', 'eighty', 'ninety'],
        A4 = ['one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'],
        A5 = ['thousand'];
    if (n < 10) return A1[n];
    if (n === 10) return A3[0];
    if (n > 10 && n < 20) return A2[n - 11];
    if (b === 0 && n < 100) return A3[a - 1];
    if (n > 20 && n < 100) return A3[a - 1] + ' ' + A1[b];
    if (d === 0 && n > 99) return A4[c - 1];
    hundredTwoLastDigits = Number(Math.floor((n / 10) % 10).toString() + Math.floor((n / 1) % 10).toString());
    if (!Math.floor(n / 100) % 10 === 0 && hundredTwoLastDigits < 10) return A4[c - 1] + ' ' + A1[hundredTwoLastDigits];
    if (!Math.floor(n / 100) % 10 === 0 && hundredTwoLastDigits === 10) return A4[c - 1] + ' ' + A3[0];
    if (!Math.floor(n / 100) % 10 === 0 && hundredTwoLastDigits > 10 && hundredTwoLastDigits < 20) return A4[c - 1] + ' ' + A2[hundredTwoLastDigits - 11];

}
