// ====================== Getter Setter and Stack Overflow ======================//
class User {
    constructor(email, password) {
        this.email = email;
        this.password = password
    }

    get email() {
        return this._email.toUpperCase()
    }

    set email(value) {
        return this._email = value
    }

    get password() {
        // return this._password.toUpperCase()
        return `${this._password}hitesh`
    }

    set password(value) {
        this._password = value
    }
}

const hitesh = new User("h@hitesh.ai", "123");
console.log(hitesh.email);