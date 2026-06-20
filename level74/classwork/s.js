class User {

  constructor(username, email) {
    this.username = username;
    this.email = email;
  }

  sayHello() {
    return `hello im ${this.username}!`;
  }
}

const user1 = new User("gio", "gio@gmail.com");
const user2 = new User("ana", "ana@gmail.com");
const user3 = new User("nika", "nika@gmail.com");
const user4 = new User("luka", "luka@gmail.com");
const user5 = new User("saba", "saba@gmail.com");
console.log(user1.sayHello());
console.log(user2.sayHello());
console.log(user3.sayHello());
console.log(user4.sayHello());
console.log(user5.sayHello());