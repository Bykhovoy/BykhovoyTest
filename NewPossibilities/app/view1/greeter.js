var Student = (function () {
    function Student(firstname, middleinitial, lastname) {
        this.firstname = firstname;
        this.middleinitial = middleinitial;
        this.lastname = lastname;
        this.fullname = firstname + " " + middleinitial + " " + lastname;
    }
    return Student;
})();
var Professor = (function () {
    function Professor(firstname, lastname, middlename) {
        this.middlename = middlename;
        this.firstname = firstname;
        this.lastname = lastname;
    }
    return Professor;
})();
function greeter(person) {
    return "Hello, " + person.firstname + " " + person.lastname;
}
var user = new Student("Jane", "M.", "User");
var prof = new Professor("Jane", "Air", "None");
document.body.innerHTML = greeter(user);
//# sourceMappingURL=greeter.js.map