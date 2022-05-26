class Author {
    private id: number;
    private firstName: string;
    private secondName: string;
    private lastName: string;

    constructor(id: number, firstName: string, secondName: string, lastName: string) {
        this.id = id;
        this.firstName = firstName;
        this.secondName = secondName;
        this.lastName = lastName;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getId(): number {
        return this.id;
    }

    public setFirstName(firstName: string): void {
        this.firstName = firstName;
    }

    public getFirstName(): string {
        return this.firstName;
    }

    public setSecondName(secondName: string): void {
        this.secondName = secondName;
    }

    public getSecondName(): string {
        return this.secondName;
    }

    public setLastName(lastName: string): void {
        this.lastName = lastName;
    }

    public getLastName(): string {
        return this.lastName;
    }

}

export default Author;