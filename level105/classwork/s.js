function nbYear(p0, percent, aug, p) {
    year= 0
    multiply = percent/100
  
  while (p0 < p){
      p0 = Math.floor(p0 + p0 * multiply + aug);
    year+=1
    
  }
  return year
  
}


function likes(names) {
  n=names.length
  
  if(n==0){
    return "no one likes this"
  }else if(n==1){
    return names[0]+" likes this" 
  }else if(n==2){
    return names[0]+" and "+names[1]+" like this"
  }else if(n==3){
    return names[0]+", "+names[1]+" and "+names[2] +" like this"
  }else{
        return names[0] + ", " + names[1] + " and " + (n-2) + " others like this"
  }
}


function firstNonRepeatingLetter(str) {
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    
    if (str.toLowerCase().indexOf(char.toLowerCase()) === str.toLowerCase().lastIndexOf(char.toLowerCase())) {
      return char;
    }
  }
  
  return "";
}


function kebabize(str) {
  let res = "";
  
  for (let i of str) {
    if (i >= '0' && i <= '9') {
      continue;
    }

    if (i === i.toUpperCase() && i !== i.toLowerCase()) {
      if (res !== "") {
        res += "-";
      }
      res += i.toLowerCase();
    } else {
      res += i;
    }
  }
  
  return res;
}


function stringTransformer(str) {
  return str.split(" ").reverse().map(word => word.split("")
          .map(char => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase())
          .join("")
    )
    .join(" ");
}


function evil(n) {
  const String = n.toString(2);
  
  let count = 0;
  for (let i of String) {
    if (i === '1') {
      count++;
    }
  }
  
  if (count % 2 === 0) {
    return "It's Evil!";
  } else {
    return "It's Odious!";
  }
}

function noSpace(x){
  return x.replaceAll(" ","")
}

function swapValues(arr) {
  const temp = arr[0];
  arr[0]=arr[1]
  arr[1]=temp
  return arr
}
