module.exports = function toReadable(n) {
    let b = n % 10, a = (n - b) / 10, c = (n - b) / 100
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
    if (n === 100) return A4[0];
    if (b == 0) return A3[a - 1];
    if (n > 20 && n < 100) return A3[a - 1] + ' ' + A1[b];
    if (c == 0) return A4[a - 1]
    if (n >= 100 && n < 110) return A4[c - 1] + ' ' + A1[b];
    
}
