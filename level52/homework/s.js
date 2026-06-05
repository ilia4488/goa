// Math.round() – ამრგვალებს რიცხვს უახლოეს მთელამდე (0.5-დან ზემოთ, დაბლა კი ქვემოთ).

// Math.abs() – აბრუნებს რიცხვის მოდულს (უარყოფით რიცხვს აქცევს დადებითად).

// Math.floor() – ამრგვალებს რიცხვს ყოველთვის ქვემოთ, უახლოეს ნაკლებ მთელამდე.

// Math.ceil() – ამრგვალებს რიცხვს ყოველთვის ზემოთ, უახლოეს მეტ მთელამდე.

// Math.sign() – აბრუნებს 1-ს თუ დადებითია, -1-ს თუ უარყოფითია, 0-ს თუ ნულია.

// Math.random() – აგენერირებს შემთხვევით ათწილად რიცხვს 0-დან 1-მდე.

// 1. Math.round()
JavaScript
Math.round(4.7);
Math.round(4.4);
Math.round(4.5);
Math.round(-1.2);
Math.round(0.1);
// 2. Math.abs()
JavaScript
Math.abs(-5);
Math.abs(5);
Math.abs(-0.25);
Math.abs(-100);
Math.abs(0);
// 3. Math.floor()
JavaScript
Math.floor(4.9);
Math.floor(4.1);
Math.floor(-4.2);
Math.floor(0.95);
Math.floor(10.5);
// 4. Math.ceil()
JavaScript
Math.ceil(4.1);
Math.ceil(4.9);
Math.ceil(-4.7);
Math.ceil(0.01);
Math.ceil(10.0);
// 5. Math.sign()
JavaScript
Math.sign(15);
Math.sign(-8);
Math.sign(0);
Math.sign(-0.5);
Math.sign(999);
// 6. Math.random()
JavaScript
Math.random();
Math.random();
Math.floor(Math.random() * 10);
Math.floor(Math.random() * 6) + 1;
Math.floor(Math.random() * 100);