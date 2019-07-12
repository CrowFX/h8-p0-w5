let sum = 0;
let temp = 0;
function totalDigitRekursif(angka) {
    if (angka < 10) {
        temp += angka;
        sum = temp;
        temp = 0;
        return sum;
    }
    temp += angka % 10;
    return totalDigitRekursif(Math.floor(angka / 10))
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5