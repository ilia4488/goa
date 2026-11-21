//3
function animal(obj){
  return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;
}

//2
function solve(s,g){
  if(s%g===0){
    return [g,s-g]
  }else{
    return -1
  }
    
}
//5
function rotations(dieArray) {
  let minimum = 100
  
  for(let i = 1; i <= 6; i++){
    let count=0
    for(let num of dieArray){
      if(num===i){
        count+=0
      }else if(num+i===7){
        count+=2
      }else{
        count+=1
      }
    }
    if (count < minimum) {
      minimum = count;
    }
  }
  return minimum
}
//4
function wrap(height, width, length) {
return 2 * (height + width + length + Math.min(height, width, length) + 10);
}
//1
function firstDup(string) {
  for(let i of string){
    if(string.indexOf(i)!==string.lastIndexOf(i)){
      return i
    }
  }
}