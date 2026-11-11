function checkAlive (health) {
  if(health > 0){
    return true
  }else{
    return false
  }
}

function capitalize(s) {
  let even = "";
  let odd = "";

  for (let i = 0; i < s.length; i++) {
    if (i % 2 === 0) {
      even += s[i].toUpperCase();
      odd += s[i];
    } else {
      even += s[i];
      odd += s[i].toUpperCase();
    }
  }

  return [even, odd];
}

function DNAtoRNA(dna) {
  let res = "";

  for (let i of dna) {
    if (i === "T") {
      res += "U";
    } else {
      res += i;
    }
  }

  return res;
}

function isTriangle(a,b,c){
  if(a+b>c && a+c>b && c+b>a ){
    return true
  }else{
    return false
  }
}

function isKiss(words){
  word=words.split(" ")
  count=word.length
  for(let i of word){
    if (i.length>count){
      return "Keep It Simple Stupid"
    }else{
      
    }
  }return "Good work Joe!"
}