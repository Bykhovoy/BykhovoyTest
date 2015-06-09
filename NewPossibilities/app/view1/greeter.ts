interface Person {
    firstname: string;
    lastname: string;
}

interface SuperPerson extends Person{
    middlename: string;
}

class Student implements Person {
    fullname : string;

    constructor(public firstname, public middleinitial, public lastname) {
        this.fullname = firstname + " " + middleinitial + " " + lastname;
    }
}

class Professor implements SuperPerson {
    firstname: string;
    lastname: string;

    constructor(firstname, lastname, public middlename) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
}

function greeter(person: Person) {
    return "Hello, " + person.firstname + " " + person.lastname;
}

var user = new Student("Jane", "M.", "User");
var prof = new Professor("Jane", "Air", "None");

document.body.innerHTML = greeter(user);

