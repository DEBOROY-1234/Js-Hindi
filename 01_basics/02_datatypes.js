"use strict" //treat all JS code as newer versions

// alert(3+3)     this code iwll not work bcz we are using nodejs not JS on browser console
let userOne = {
    email : "hello"
}

let userTwo = userOne
userTwo.email = "yooo"

console.log(userOne.email);


