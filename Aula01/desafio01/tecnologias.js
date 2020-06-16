const users = [
    { 
        name: "Carlos",
        technologys: ["HTML", "CSS"]
    },
    { 
        name: "Jasmine",
        technologys: ["JavaScript", "CSS"] 
    },
    {
        name: "Tuane", 
        technologys: ["HTML", "Node.js"] 
    }
];


  for (let i = 0; i < users.length; i++){
    console.log(`${users[i].name} whit ${users[i].technologys}`);
}

function CzechSeUserUsaCSS(user){
    for(let i = 0; i < user.technologys.length; i++){
        if(user.technologys[i] == "CSS")
        return true
    }

    return false
}


for (let i = 0; i < users.length; i++) {
    const userWorksWithCSS = CzechSeUserUsaCSS(users[i]);
  
    if (userWorksWithCSS) {
      console.log(`User ${users[i].name} work with CSS`);
    }
}
