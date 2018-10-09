export class User {
    public nFirst: string;
    public nLast: string;
    public email: string;
    public password: string;
    public UserID: string;

    constructor(fName: string, lName: string, email:string, password:string) {
        this.nFirst = fName;
        this.nLast = lName;
        this.email = email;
        this.password = password;
    }

    setUserId(userID: string) {
        this.UserID = userID;
    }
}