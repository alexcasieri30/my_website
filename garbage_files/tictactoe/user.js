class User{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

function printName(user){
    console.log("user's name is : ", user.name);
}

function printAge(user){
    console.log("User's age is :", user.age);
}

export default User;
export { printAge, printName };