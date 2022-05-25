class User {
    private id: number;
    private login: string;
    private password: string;
    private role: string;

    constructor(id: number, login: string, password: string, role:string) {
        this.id = id;
        this.login = login;
        this.password = password;
        this.role = role;
    }

    public getId(): number {
        return this.id;
    }

    public setLogin(login: string): void {
        this.login = login;
    }

    public setPassword(password: string): void {
        this.password = password;
    }

    public setRole(role: string): void {
        this.role = role;
    }

    public getLogin(): string {
        return this.login;
    }

    public getRole(): string {
        return this.role;
    }

}

export default User;
