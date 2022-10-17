"use strict";
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
let user = { firstName: "Bogdan", lastName: "Hach1" };
document.body.textContent = greeter(user);
