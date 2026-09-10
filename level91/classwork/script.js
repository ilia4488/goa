// 1) ახსენით რა არის: Client, Server, HTTP, TCP, სტატუს კოდი 200 და 404, რა განსხვავებაა HTTP-სა და HTTPS-ს შორის? ასევე ახსენით რა არის GET და POST
//client aris adamiani-momxmarebeli vinc shedis saitze magalitad kompiuterit and leptopit
//server aris monacemebis bloki-didi kompiuteri monacemebis baza sadac inaxeba mtliani informacia
// HTTP aris clientis da serveris damakavshirebeli
// TCP uzrunvelyofs monacemebis ufro zustad gadacemas
//status codi 200 nishnavs rom yvelaferi rigzea da 404 aris igive erori
//HTTP-sa da HTTPS-s shoris is gansxvavebaa rom HTTPS ufro usafrtxoa
//GET aris metodi rom monacemebi gadmovitanot serveridan clientistvis
//POST aris metodi rom clientis informacia gadaeces servers

//  ახსენით რა არის error ი და რატომ შეიძლება იყოს კარგი error ებთან მუშაობა და error ების პოვნა'
//error aris igive shecdoma, errorebtan mushaoba kargi imitom sheidzleba iyos rom errorebis gamosworebashi swavlob, 
// errorebis povna kargi sheidzleba imitom iyos rom magalitad didi kompaniebi fuls chuqnian im xalxs vinc poulobs mat programashi 
// errorebs rata shemdeg gamoasworeben am errorebs da uketesi programa eqnebat

// სიტუაცია:
// წარმოიდგინე, რომ ვებ-გვერდზე გაქვს HTML ფორმა (ან ამზადებ მონაცემებს JavaScript-ით), სადაც მომხმარებელი ავსებს ინფორმაციას. სერვერზე ამ მონაცემების 
// გასაგზავნად გადაწყვეტ FormData ობიექტის გამოყენებას, რა დროსაც headers-ის მითითება საჭირო არ არის, რადგან ბრაუზერი თავად უზრუნველყოფს სწორი 
// ტიპის მითითებას.
// მონაცემები (API):
// URL (Endpoint): https://jsonplaceholder.typicode.com/posts
// HTTP მეთოდი: POST
// პირობები და ნაბიჯები, რომლებიც კოდში უნდა შეასრულო:
// შექმენი FormData ობიექტი: გამოიყენე new FormData() და .append() მეთოდი, რომ დაამატო შემდეგი სამი ველი:
// title: (შენი სასურველი სათაური, მაგ: "ჩემი ახალი პოსტი")
// body: (პოსტის მთავარი ტექსტი)
// userId: (ნებისმიერი რიცხვი, მაგალითად: 1)
// გამოიყენე fetch ფუნქცია: დაწერე მოთხოვნა მითითებულ URL-ზე.
// გაუწერე კონფიგურაცია (Options): fetch-ის მეორე არგუმენტში მიუთითე:
// method: POST
// body: გადაეცი შენ მიერ შექმნილი FormData ობიექტი (გაითვალისწინე: ამ დროს JSON.stringify და headers არ გვჭირდება).
// დაამუშავე სერვერის პასუხი: წაიკითხე სერვერის პასუხი როგორც JSON და გამოიტანე კონსოლში (console.log).
// ერორების დაჭერა: არ დაივიწყო შეცდომების მართვა (try...catch ან .catch()), რომ რაიმე პრობლემის შემთხვევაში კონსოლში შესაბამისი შეტყობინება დაიბეჭდოს.

async function Createpost() {
  const url = "https://jsonplaceholder.typicode.com/posts"

  const formData = new FormData();
  formData.append("title","ჩემი ახალი პოსტი")
  formData.append("body","mTavari teqsti")
  formData.append("userId","190873")

  try {
    const res = await fetch(url,{
      method:"POST",
      body:formData
    })

    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err.message)
  }
}

// ახსენით რა არის error handling და რაში გვეხმარება ასევე დაწერეთ 1 მაგალითი მასზე

// error handling-ი არის error-ების მართვა
// მაგალითად როდესაც ერორი წარმოიქმნება ცონსოლლოგში რომ გამოიტანოს თვითონ შეცდომა და სწორი რეაგირება მოხდეს და მარტივად მიხვდები რა შეცდომაა
try {
  const variable1 = 9%2===0
  console.log(variable1)
} catch (error) {
  console.log(error.message)
}
try {
  const variable1 = 9%2===0
  console.log(variable2)
} catch (error) {
  console.log(error.message)
}