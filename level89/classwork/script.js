
// Promise.All() aris igive promise ogond mas sheudzlia ramodenime artad daapromisos, igebs promisebis masivs da is abrunebs ert promiss da darezolvdeba
//  tu yvela promisi warmatebit shesruldeba da minusi isaaq rom tu erti promisisc ar iqneba warmatebuli mtlianada chaishleba
//pliusi isaaq rom ubralod chawer Promise.All() promisebs martivad da swrafad

// function getUser() {
//     return new Promise(resolve => setTimeout(() => resolve("მომხმარებელი: გიორგი"), 1000));
// }

// function getPosts() {
//     return new Promise(resolve => setTimeout(() => resolve("პოსტები: [Post1, Post2]"), 2000));
// }

// function getComments() {
//     return new Promise(resolve => setTimeout(() => resolve("კომენტარები: [Comment1]"), 1500));
// }
// function game() {
//     return new Promise(resolve => setTimeout(() => {
//         resolve("sfygj")
//     }, 1222))
// }
// async function loadData() {
//     console.time("ჩატვირთვის დრო");
    
//     const results = await Promise.all([getUser(), getPosts(), getComments(),game()]);
    
//     console.log(results); 
    
// }

// loadData();
// ახსენიოთ რაში გვეხამრება HTTP Request ები
// HTTP Request-ebi gvexmareba saitis funqcionalshi da martvashi, monacemebis gadazidvashi da saitsa da serveresbs shoris 
// monacemebis gacvlashi da saits xdis dinamiurs


// 3) ახსენით რა არის: Client,  Server, HTTP, TCP, სტატუს კოდი 200 და 404, რა განსხვავებაა HTTP-სა და HTTPS-ს შორის?

//client aris kompiuteri an leptopi saidanac momxmarebeli shedis saitze, 
// serveri aris didi kompiuteri-bloki,monacemebis baza sadac inaxeba bevri informacia , 
// HTTP aris clientis da serveris damakavshirebeli
// TCP uzrunvelyofs monacemebis ufro zustad gadacemas
// status kodi 200 nishnavs rom yvelaferi rigzea da 404 aris shecdoma kavshiri daiwira magram waishala
//HTTP - monacemebi gadaicema ტექსურად და არ არის ისეთი უსაფრთხო როგორიც HTTPS რადგან HTTPS შიფრავს ტექსტს და მხოლოდ
//მიმღებ სერვერს შეუძლია გაიგოს თუ რა წერია შიგნით მთავარი განსხვავებაა უსაფრთხოება ამ ორს შორის