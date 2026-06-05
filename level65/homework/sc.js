

let hd = document.getElementById("fh");
hd.innerHTML="world";
hd.style.color="yellow";
hd.style.fontSize="70px";

function Box(){
    let x=0;

    this.setX=function(value){
        x=value;
    }
    this.getX=function(){
        return x;
    }
}

let myBox = new Box();

myBox.setX(10);

console.log(myBox.getX());

function Profile(name){
    this.setName=function(newname){
        name=newname;
    };
    this.getName=function(){
        return name;
    }
}

let user = new Profile("Giorgi");

console.log(user.getName());

user.setName("Anano");

console.log(user.getName());