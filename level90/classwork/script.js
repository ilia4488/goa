// 1) ახსენით რა არის: Client, Server, HTTP, TCP, სტატუს კოდი 200 და 404, რა განსხვავებაა HTTP-სა და HTTPS-ს შორის?

//client aris adamiani-momxmarebeli vinc shedis saitze magalitad kompiuterit and leptopit
//server aris monacemebis bloki-didi kompiuteri monacemebis baza sadac inaxeba mtliani informacia
// HTTP aris clientis da serveris damakavshirebeli
// TCP uzrunvelyofs monacemebis ufro zustad gadacemas
//status codi 200 nishnavs rom yvelaferi rigzea da 404 aris igive erori
//HTTP-sa da HTTPS-s shoris is gansxvavebaa rom HTTPS ufro usafrtxoa

// ახსენით რა არის GET და POST
// GET aris metodi rom monacemebi avigot serveridan clientshi rom gadaitano da POST aris metodi rom clientidan informacia gadaeces servers


// შენ აგრძელებ "Todo" (გასაკეთებელი საქმეების) აპლიკაციის განვითარებას. ამჯერად ახალი დავალების სერვერზე გასაგზავნად უნდა გამოიყენო 
// თანამედროვე ასინქრონული მიდგომა — async/await და try...catch ბლოკი.

// შენი ამოცანაა, დაწერო JavaScript კოდი შემდეგი ინსტრუქციებით:

// ფუნქციის შექმნა:

// შექმენი ასინქრონული ფუნქცია სახელწოდებით addTodo (async).

// შეცდომების მართვის ბლოკი (try...catch):

// ფუნქციის შიგნით გახსენი try...catch კონსტრუქცია, რათა მოსალოდნელი შეცდომები უსაფრთხოდ დაიჭირო.

// მონაცემების მომზადება:

// try ბლოკის შიგნით, აიღე ინპუტში ჩაწერილი მნიშვნელობა (todoInput.value) და შეინახე ცვლადში.

// გადააქციე ეს მონაცემი JSON ტექსტად JSON.stringify()-ის გამოყენებით (გასაღები იყოს task).

// მოთხოვნის გაგზავნა (await fetch):

// შექმენი response ცვლადი და მიანიჭე მას await fetch()-ის შედეგი.

// პირველ არგუმენტად გადაეცი სერვერის მისამართი (url), ხოლო მეორე არგუმენტად — ობიექტი, სადაც მიუთითებ მეთოდს (method: 'POST') და სხეულს (body).

// პასუხის დამუშავება და შეცდომის შემოწმება:

// შეამოწმე, არის თუ არა response.ok ჭეშმარიტი.

// თუ კი, მიიღე და დააბრუნე სერვერის პასუხი await response.json()-ის გამოყენებით.

// თუ response.ok მცდარია, ისროლე ახალი შეცდომა (throw new Error(...)).

// catch ბლოკში კი დაბეჭდე ქსელის შეცდომის მესიჯი კონსოლში (console.log(...)).
async function addTodo() {
  try {
    const ntext = todoInput.value;
    const trtext = JSON.stringify({ task: ntext });
    const response = await fetch('url', {
      method: 'POST',
      body: trtext
    });

    if (response.ok==true) {
      const data = await response.json();
      return data;
    } else {
      throw new Error('სერვერიდან უარყოფითი პასუხი მოვიდა');
    }

  } catch (error) {
    console.log(error.message);
  }
}

const url = 'https://jsonplaceholder.typicode.com/posts'

async function addTodo() {
    try {
        const newTask = todoInput.value
        const data = JSON.stringify({ task: newTask})

        const res = await fetch(url, {
            method: "POST",
            body: data
        })

        if (res.ok) {
            const jres = await res.json()
            console.log(jres)
            return jres
        }

        throw new Error("usdhfgjksedhfgkjdsfg")
    } catch (error) {
        console.log(error.message)
    }
}