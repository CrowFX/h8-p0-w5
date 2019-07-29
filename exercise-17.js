function kaliTerusRekursif(angka) {
/*     let temp = 1;
    let tempStr = '';
    if (angka < 10) {
        return angka;
    }
    tempStr = angka.toString();
    for (let i = 0; i < tempStr.length; i++) {
        temp *= Number(tempStr[i]);
    }
    return kaliTerusRekursif(temp) */
    return angka < 10 ? angka : kaliTerusRekursif(String(angka).split('').map(x => Number(x)).reduce((a, b) => a * b))
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6