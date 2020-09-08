function printNumbers(start, end){
    for (let i = start; i <= end; i++) {
        console.log(i);
    }
}
// printNumbers(1,10);

function printSquare(number){
    for (let i = 0; i < number; i++){
        // repeat will repeat the specified string the number of times you tell it to
        console.log('-'.repeat(number))
    }
}
// printSquare(5);

function printBox(width, height){
    // Top of box
    for(let i = 1; i <= height; i++){
        if(i === 1 || i === height){
            console.log('*'.repeat(width))
        }else{
            console.log('*' + ' '.repeat(width-2) + '*')
        }
    }
}
// printBox(6, 4)

function printBanner(text){
    for (let i = 0; i < 3; i++){
        if (i === 0 || i === 2){
            console.log('-'.repeat(text.length + 4));
        } else {
            console.log('- ' + text + ' -');
        }
    }
}
// printBanner('Welcome to DigitalCrafts')


function factorNumber(number){
    factorArray = [];
    for (let counter = 1; counter <= number; counter++){
        if (number % counter === 0){
            factorArray.push(counter);
        }
    }
    return factorArray;
}
// let someThing = factorNumber(120)
// console.log(someThing)

function caesarCipher(string, offset){
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let newString = ' ';
    string = string.toLowerCase();
    for (let stringIndex = 0; stringIndex < string.length; stringIndex++){
        if (string[stringIndex] === ' '){
            newString += ' ';
        }
        for (let alphabetIndex = 0; alphabetIndex < alphabet.length; alphabetIndex++){
            if (string[stringIndex] === alphabet[alphabetIndex]){
                let newIndex = '';
                if (alphabetIndex - offset >= 0){
                    newIndex = (alphabetIndex) - offset;
                }else {
                    newIndex = (alphabet.length - 1) - (offset - (alphabetIndex + 1));
                }
                newString += alphabet[newIndex];
                break;
            }
        }
    }
    return newString;
}

function caesarDeCipher(string, offset){
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let newString = ' ';
    string = string.toLowerCase();
    for (let stringIndex = 0; stringIndex < string.length; stringIndex++){
        if (string[stringIndex] === ' '){
            newString += ' ';
        }
        for (let alphabetIndex = 0; alphabetIndex < alphabet.length; alphabetIndex++){
            if (string[stringIndex] === alphabet[alphabetIndex]){
                let newIndex = '';
                if (alphabetIndex + offset < 26){
                    newIndex = (alphabetIndex) + offset;
                }else {
                    newIndex = ((alphabetIndex + 1) + offset) - (alphabet.length + 1);
                }
                // console.log(newIndex)
                newString += alphabet[newIndex];
                break;
            }
        }
    }
    return newString;
}
// const ciphered = caesarCipher('Genius without education is like silver in the mine', 13);
// console.log(caesarDeCipher(ciphered, 13))

function leetSpeak(string){
    string = string.toLowerCase();
    let newString = '';
    for (let i = 0; i < string.length; i++){
        switch (string[i]){
            case 'a':
                newString += '4';
                break;
            case 'e':
                newString += '3';
                break;
            case 'g':
                newString += '6';
                break;
            case 'i':
                newString += '1';
                break;
            case 'o':
                newString += '0';
                break;
            case 's':
                newString += '5';
                break;
            case 't':
                newString += '7';
                break;
            default:
                newString += string[i];
        }
        
    }
    console.log(newString);
}

// leetSpeak('Leet');

function longVowel(string){
    let longString = '';
    for (let char = 0; char < string.length; char++){
        // console.log(string[char])
        // if index is the last index of the string, then we knew we can't check on the next index without getting an index
        if (char === string.length - 1){
            longString += string[char];
        // if the next immediate character is the same, and it is also a vowel, then we add five of that character to our newString variable
        }else if ((string[char] === string[char + 1]) && (string[char] === 'a' || string[char] === 'e' || string[char] === 'i' || string[char] === 'o' || string[char] === 'u')){
            // only do 4 because the second character in the string variable will go through loop, it won't trigger this particular else if
            // statement, and will therefore simply be added with the last else statement to the longString variable.
            longString += string[char].repeat(4);
        }else{

            longString += string[char];
        }
        // console.log(longString)
    }
    return longString;
}

// console.log(longVowel('Good'))

function sumNumbers(someArray){
    let addition = 0;
    for (let numb = 0; numb < someArray.length; numb++){
        addition += someArray[numb];
    }
    return addition;
}
// console.log(sumNumbers([1, 4, 8]));