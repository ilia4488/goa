function firstDup(string) {
  let seen = "";
  let firts= "";
  for (let i = 0; i < string.length; i++) {
    for(let j = i + 1; j<string.length;j++)
    if (string[i]==string[j]){
      return string[i];
    } else {
      seen += string[i];
    }
  }

  return undefined;
}

function solve(s,g){
  let gos = []
  if(s%g==0){
    gos.push(g)
    gos.push(s-g)
    return gos
  }else{
    return -1
  }
}

function multiples(a, b, limit) {
  let nums = [];

  for (let i = 1; i <= limit; i++) {
    if(i%a==0&&i%b==0){
      nums.push(i)
    }
  }

  return nums;
}

function wrap(height, width, length){
  return Math.min(height, width, length) * 2 + 20 + (height + width + length) * 2;
}


function rotations(dieArray) {
    let minimum = 100;

    for (let i = 1; i <= 6; i++) {
        let count = 0;

        for (let num of dieArray) {
            if (num === i) {
                continue;
            } else if (num + i === 7) {
                count += 2;
            } else {
                count++;
            }
        }

        if (count < minimum) {
            minimum = count;
        }
    }

    return minimum;
}