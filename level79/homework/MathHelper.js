class MathHelper {

  static isEven(number) {
    if (number % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }

  static average(numbers) {
    let sum = 0; 
    for (let i = 0; i < numbers.length; i++) {
      sum = sum + numbers[i];
    }

    return sum / numbers.length;
  }

}

console.log(MathHelper.isEven(8));
console.log(MathHelper.average([10, 20, 30]));