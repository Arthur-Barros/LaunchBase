const programmer = {
    name: "Arthur",
    age: "18",
    specialties:[
        {
            name: "C++",
            specialties: "Desktop"
        },
        {
            name: "JavaScript",
            specialties: "Web/Mobile"
        },
        {
            name: "Python",
            specialties: "Data Science"
        }
    ]

}


// O usuário Carlos tem 32 anos e usa a tecnologia C++ com especialidade em Desktop

console.log(`O programmer ${programmer.name} 
has ${programmer.age} years and uses technology 
${programmer.specialties[0].name} specializing in ${programmer.specialties[0].specialties} `);
