function changeVocals(str) {
    let qq = '';
    for (let i = 0; i < str.length; i++) {
        switch (str[i]) {
            case 'A': qq+='B'; break;
            case 'I': qq+='J'; break;
            case 'U': qq+='V'; break;
            case 'E': qq+='F'; break;
            case 'O': qq+='P'; break;
            case 'a': qq+='b'; break;
            case 'i': qq+='j'; break;
            case 'u': qq+='v'; break;
            case 'e': qq+='f'; break;
            case 'o': qq+='p'; break;
            default: qq+=str[i]; break;
        }
    }
    return qq;
}

function reverseWord(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

function setLowerUpperCase(str) {
    let changedCase = '';
    const upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    const lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < 26; j++) {
            if (str[i] === upperCase[j]) {changedCase += lowerCase[j]; break;}
            if (str[i] === lowerCase[j]) {changedCase += upperCase[j]; break;}
        }
    }
    return changedCase;
}

function removeSpaces(str) {
    return str;
}   

function passwordGenerator(name) {
    if (name.length < 5) {return 'Minimal karakter yang diinputkan adalah 5 karakter';}
    let changingVocals = changeVocals(name);
    let reversal = reverseWord(changingVocals);
    let changingCase = setLowerUpperCase(reversal);
    let removingSpaces = removeSpaces(changingCase);
    return removingSpaces;
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'