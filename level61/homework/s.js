
const fruits = ['ვაშლი', 'მსხალი', 'ატამი'];

fruits.forEach((fruit, index) => {
    console.log(index + ": " + fruit);
});



const numbers = [1, 2, 3, 4, 5, 6];

numbers.forEach((num) => {
    if (num % 2 === 0) {
        console.log(num + " - ლუწია");
    } else {
        console.log(num + " - კენტია");
    }
});



const prices = [100, 250, 50, 80];

const salePrices = prices.map((price) => {
    return price * 0.9;
});

console.log(salePrices); 



const words = ['სახლი', 'გზა', 'ავტომობილი', 'ხე'];

const hasLongWord = words.some((word) => {
    return word.length > 10;
});

console.log(hasLongWord); 



const nums = [5, 12, 8, 130, 44];

const firstNumberGreaterThan10 = nums.find((num) => {
    return num > 10;
});

console.log(firstNumberGreaterThan10); 



const fruitList = ['ვაშლი', 'ბანანი', 'ფორთოხალი', 'ატამი'];

const orangeIndex = fruitList.findIndex((fruit) => {
    return fruit === 'ფორთოხალი';
});

console.log(orangeIndex);


const textArray = ['მე', 'მიყვარს', 'JavaScript'];

const sentence = textArray.reduce((accumulator, currentWord) => {
    return accumulator + " " + currentWord;
});

console.log(sentence); 