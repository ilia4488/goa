// async function createObj() {
//     try {
//     const response = await fetch('https://api.restful-api.dev/objects',{
//         method: 'POST',
//         headers:{
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             name: 'Apple Maq Pro 16',
//             data: {
//                 year:2019,
//                 price:1849.99,
//                 'CPU model': 'Intel Core i9',
//                 'Hard disk size': '1 TB'
//             }
//         })
//     });
//     const result = await response.json();
//     console.log(result)
// }catch (error) {
//         console.log(error.message)
//     }
// }

// createObj()

async function create(collectionName) {
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
                "x-api-key": '6c43efaf-790f-40c7-94ad-36075e5f814d',
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

create('product')