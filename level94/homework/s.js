
// async function create1() {
//     const url = `https://api.restful-api.dev/collections`
//     try {
//         const res = await fetch(url,{
//             method:`GET`,
//             headers: {"x-api-key":'f4796373-d50e-4d07-b8f0-044c3926bb54'}

//         })

//         const data = await res.json();
//         console.log(data)
//     } catch (error) {
//         console.log(error.message)
//     }
// }
// create1()


// async function create2(collectionName) {
//     const url = `https://api.restful-api.dev/collections/${collectionName}/objects`;

//     try {
//         const res2 = await fetch(url, {
//             method: 'GET',
//             headers: {
//                 "x-api-key": 'f4796373-d50e-4d07-b8f0-044c3926bb54'
//             }
//         });


//         const data2 = await res2.json();
//         console.log(data2);
//         return data2;
//     } catch (error) {
//         console.log(error.message);
//     }
// }

// create2('products');

// async function create3(collectionName,id) {
//     const url = `https://api.restful-api.dev/collections/${collectionName}/objects/${id}`
//     try {
//         const res3 = await fetch(url,{
//             method:'GET',
//             headers: {
//                 "x-api-key": 'f4796373-d50e-4d07-b8f0-044c3926bb54'
//             }
//         })
//         const data3 = await res3.json();
//         console.log(data3)
//     } catch (error) {
//         console.log(error.message);
//     }
// }
// create3("products","12834989")

async function create4(collectionName) {
    const url = `https://api.restful-api.dev/collections/${collectionName}/objects`;
    const device = {
        name: 'Apple MacBook Pro 16',
        date:{
        year:2019,
        price:1849.99,
        'CPU model': 'Intel Core i9',
        'Hard disk size': '1 TB'
        }

    };
    try {
        const res = await fetch(url,{
            method:'POST',
            headers: {
                "x-api-key": 'f4796373-d50e-4d07-b8f0-044c3926bb54',
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(device)
        })
        const result = await res.json();
        console.log(result)
    } catch (error) {
        console.log(error.message)
    }
}

create4('product')

async function create5() {
    const url = `https://api.restful-api.dev/register`;
    const characters = {
  "email": "antonio@example.com",
  "password": "securePassword123",
  "name": "Antonio"
    }
    try {
        const res = await fetch(url,{
            method:'POST',
            headers: {
                "x-api-key": 'f4796373-d50e-4d07-b8f0-044c3926bb54',
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(characters)
        })
        const result = await res.json();
        console.log(result)
    } catch (error) {
        console.log(error.message)
    }
}

create5()


async function create6() {
    const url = `https://api.restful-api.dev/login`;
    const characters = {
  "email": "antonio@example.com",
  "password": "securePassword123"
}
    try {
        const res = await fetch(url,{
            method:'POST',
            headers: {
                "x-api-key": 'f4796373-d50e-4d07-b8f0-044c3926bb54',
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(characters)
        })
        const result = await res.json();
        console.log(result)
    } catch (error) {
        console.log(error.message)
    }
}

create6()
