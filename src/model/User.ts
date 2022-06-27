export interface User {
    id: number,
    login: string,
    name: string,
    password: string,
    password2: string,
    role: string,
    active: boolean
}

export const sampleUser: User = {
    id: 0,
    login: "",
    name: "",
    password: "",
    password2: "",
    role: "",
    active: false,
}

// class User {
//     private id: number;
//     private login: string;
//     private name: string;
//     private password: string;
//     private password2: string;
//     private role: string;
//     private active: boolean;

//     constructor(id: number,
//                 login: string,
//                 name:string,
//                 password: string,
//                 password2: string,
//                 role:string,
//                 active: boolean) {
//         this.id = id;
//         this.login = login;
//         this.name = name;
//         this.password = password;
//         this.password2 = password2;
//         this.role = role;
//         this.active = active;
//     }

//     public getId(): number {
//         return this.id;
//     }

//     public setId(id: number): void {
//         this.id = id;
//     }

//     public setLogin(login: string): void {
//         this.login = login;
//     }

//     public setName(name: string): void {
//         this.name = name;
//     }

//     public getName(): string {
//         return this.name;
//     }

//     public setPassword(password: string): void {
//         this.password = password;
//     }

//     public setPassword2(password2: string): void{
//         this.password2 = password2;
//     }

//     public setRole(role: string): void {
//         this.role = role;
//     }

//     public getLogin(): string {
//         return this.login;
//     }

//     public getRole(): string {
//         return this.role;
//     }

//     public setActive(active: boolean): void {
//         this.active = active;
//     }

//     public isActive(): boolean {
//         return this.active;
//     }

// }

// export default User;
