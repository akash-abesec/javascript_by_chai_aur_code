// ============== Static Properties ==============

class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`Username : ${this.username}`);
    }

    static createId() {
        return `123`
    }
}

const akash = new User("hitesh")
// console.log(akash.createId());  // => 123

class Teacher extends User {
    constructor(username, email) {
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
iphone.logMe()  // => Username : iphone
// console.log(iphone.createId());