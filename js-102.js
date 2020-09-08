function printNumbers(start, end){
    for (let i = start; i <= end; i++) {
        console.log(i);
    }
}
printNumbers(1,10);

function printSquare(number){
    for (let i = 0; i < number; i++){
        // repeat will repeat the specified string the number of times you tell it to
        console.log('-'.repeat(number))
    }
}
printSquare(5);

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
printBox(6, 4)

function printBanner(text){
    for (let i = 0; i < 3; i++){
        if (i === 0 || i === 2){
            console.log('-'.repeat(text.length + 4));
        } else {
            console.log('- ' + text + ' -');
        }
    }
}
printBanner('Welcome to DigitalCrafts')


function factorNumber(number){
    factorArray = [];
    for (let counter = 1; counter <= number; counter++){
        if (number % counter === 0){
            factorArray.push(counter);
        }
    }
    return factorArray;
}
let someThing = factorNumber(120)
console.log(someThing)

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

leetSpeak('Leet');