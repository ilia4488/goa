function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

async function greet(params) {
    console.log("ველოდები მონაცემებს...");
    await delay(2000)
    console.log("მონაცემები წარმატებით ჩაიტვირთა!");
}

greet()

function fetchUser(id) {
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve({userId: id, role: "admin"})
        }, 1000);

    })
}

function getPermissions(role) {
    return new Promise((resolve)=>{
        setTimeout(() => {
            if (role==="admin"){
                resolve(["წაკითხვა", "ჩაწერა", "წაშლა"])
            }else{
                resolve([]);
            }
        }, 1000);
    })

}

async function loadUserDashboard(id){
  const user = await fetchUser(1);
  const permissions = await getPermissions(user.role);
  console.log(permissions);
}

loadUserDashboard(1)