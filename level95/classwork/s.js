async function create() {
    const url = 'https://api.restful-api.dev/objects'
    const device={
        name: 'Apple MacBook Pro 16',
        data: {
            year: 2019,
            price: 1849.99,
            'CPU model': 'Intel Core i9',
            'Hard disk size': '1 TB'
        }
    };
    try {
        const res = await fetch(url,{
            method:'POST',
            headers:{
                "Content-Type": 'application/json'
            },
            body:JSON.stringify(device)
        })
        const result = res.json()
        console.log(result)
    } catch (error) {
        console.log(error.message)
    }
}
create()


//2) ახსენით რა არის silent bug ი. ასვევე ჩამოთვალეთ ნასწავლი Erorr ები და რას ნიშნავს თითეული ახსენით
//silent bug aris iseti errori-shecdoma romelic ar chans consolshi da saertod arsad magram ushlis kods sworad mushaobashi
//Mas kidev uwodeben logikur shecdomas
//SyntaxError,ReferenceError,TypeError
//SyntaxError aris eseigi arasworad dawerili codi magalitad pythonshi rom dawero printis magivrad prant
//ReferenceError aris rodesac magalitad gamoidzaxeb codshi iset cvlads romelic ar arsebobs kodshi 
//TypeError aris rodesac magalitad cvladshi chawer ricxvs da shemdeg daakonsologeb am cvladis saxels.uppercase
//Magalitad 
//Const variable=5
//Console.log(variable.toUpperCase())

//3) ახსენით რა არის Runtime Error და ასევე როგორ შეგვიძლია შევქმნათ ხელოვნურად ერორი და დაწერეთ მაგალითი მასზე
// runtime error aris shecdoma romelic warmoiqmneba programis gashvebis processhi
// xelovnurad rom shevqmnat errori unda davwerot es xari throw new Error("")
function checkAge(age) {
    if (age < 18) {
        throw new Error("you should be 18 years old or more");
    }
    
    return "Access is permitted.";
}

try {
    console.log(checkAge(15));
} catch (error) {
    console.log(error.message);
}