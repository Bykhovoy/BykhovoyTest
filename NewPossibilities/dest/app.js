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
document.body.innerHTML = greeter(user);
/**
 * Created by bykhovoy on 01/06/15.
 */
//# sourceMappingURL=app.js.map