
const names = ['ანა', 'ნიკა', 'გიორგი'];

names.forEach(function(name) {
  console.log('გამარჯობა ' + name);
});


const arr=[2, 4, 6, 8]

const double = arr.map(function(n){
    return n *2
});

console.log(double)

const ages = [12, 25, 17, 30, 15]

const adult = ages.filter(function(adul){
    return adul >=18
})

console.log(adult)

const nums = [5, 8, -2, 10];

const hasNegative = nums.some(function(num) {
  return num < 0;
});

console.log(hasNegative);