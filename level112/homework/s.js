function factorial(n){
  res=1
  if(n===1||n===0){
    return 1
  }else{
    while(n>1){
      res*=n
      n--
    } 
  }
  return res
}

function XO(str) {
  let countX = 0
  let countO = 0
  for (let i of str){
    if (i.toLowerCase() === "x"){
      countX+=1
    }
  }
  for (let i of str){
    if(i.toLowerCase() === "o"){
      countO+=1
    }
  }
    if(countX === countO){
      return true
    }else{
      return false
    }
}

function duplicateEncode(word){
  let res = ""

  for(let i of word){
    if(word.toLowerCase().indexOf(i.toLowerCase()) === word.toLowerCase().lastIndexOf(i.toLowerCase())){
      res += '('
    }else{
      res += ')'
    }
  }
  return res
}

function duplicateCount(text){
  let count = 0
  let dup = []
  for (let i of text){
    if(text.toLowerCase().indexOf(i.toLowerCase()) !== text.toLowerCase().lastIndexOf(i.toLowerCase())){
      
      if(!dup.includes(i.toLowerCase()) && text.toLowerCase().indexOf(i.toLowerCase()) !== text.toLowerCase().lastIndexOf(i.toLowerCase())){
        dup.push(i.toLowerCase())
        count+=1
      }
    }
  }
  return count
}

function persistence(num) {
  let len = String(num)
  let answer = 0
  while(len.length > 1){
    let n = 1
    
    for(let i of len){
      n *= i
    }
    len = String(n)
    answer += 1
  }
  return answer
}