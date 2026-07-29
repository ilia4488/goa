// # Classwork

// 1) დამხმარე ფაილში შექმენით ფუნქცია რომელსაც გადაეცემა 3 რიცხვითი არგუმენტი და გამოიტანს მაქსიმალურ რიცხვს შემდეგ მთავარ ფაილში დააიმპორტეთ 
// და გამოიძახეთ შემოწმებაც თუ ექნება ფუნქციას რომ ნამდვილად რიცხვი შემოიტანოს კარგი იქნება

// 2) გააკეთეთ დამხმარე ფუნქცია სადაც იქნება პაროლის ვალიდაცია(პაროლი უნდა იყოს მინიმუმ 8 სიმბოლოსგან და უნდა შედგებოდეს როგორც ასოების
//  ისე რიცხვებისგან) შემდეგ გამოიძახეთ ეს ფუნქცია მთავარ ფაილში

// 3) დამხმარე ფაილში შექმენით ორი ფუნქცია ერთი რომელიც აბრუნებს დადებით და თან ლუწ რიცხვებს არგუმენტად გადაეცემა მასივი შემდეგ მეორე
//  ფუნქცია შექმენით რომელიც გამოითვლის საშუალოს ამასაც გადაეცით მასივი

// 4) დამხმარე ფაილში ფუნქციას არგუმენტად გადაეცით მასივი სადაც იქნება როგორც დადებითი ასევე უარყოფითი რიცხვები ფუნქციამ უნდა 
// დაითვალოს დადებითების რაოდენობა და უარყოფითების ჯამი.

const biggest = (a, b, c) => {
  if (a >= b && a >= c) {
    console.log(a);
  } else if (b >= a && b >= c) {
    console.log(b);
  } else {
    console.log(c);
  }
};



export{biggest}

const password = (pass) => {
    if(pass.length < 8){
        return "password should be minimum 8 symbols long"
    }
    const letters="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const numbers = "0123456789"
    let hasLetter = false;
    let hasNumber = false;

  for (let i of pass) {
    if (letters.includes(i)) {
      hasLetter = true;
    }
    if (numbers.includes(i)) {
      hasNumber = true;
    }
  }

  if (!hasLetter) {
    return "Password should contain at least one letter";
  }

  if (!hasNumber) {
    return "Password should contain at least one number";
  }

  return "password is approved"
}

export {password}




const getPositiveEvens = (arr) => {
  let result = [];

  for (let i of arr) {
    if (i > 0 && i % 2 === 0) {
      result.push(i);
    }
  }

  return result;
};


const getAverage = (arr) => {
  if (arr.length === 0) return 0;

  let sum = 0;

  for (let i of arr) {
    sum += i;
  }

  return sum / arr.length;
};

export{getPositiveEvens,getAverage}

const processNumbers = (arr) => {
  let positiveCount = 0;
  let negativeSum = 0;

  for (let num of arr) {
    if (num > 0) {
      positiveCount++;
    } else if (num < 0) {
      negativeSum += num;
    }
  }

  return { positiveCount, negativeSum };
};

export{processNumbers}
