class User {
    private id: number;
    private login: string;
    private name: string;
    private password: string;
    private role: string;

    constructor(id: number, login: string, name:string, password: string, role:string) {
        this.id = id;
        this.login = login;
        this.name = name;
        this.password = password;
        this.role = role;
    }

    public getId(): number {
        return this.id;
    }

    public setLogin(login: string): void {
        this.login = login;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getName(): string {
        return this.name;
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
