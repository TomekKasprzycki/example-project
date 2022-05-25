
class Currency {
    private currency: string;
    private code: string;
    private bid: number;
    private ask: number;

    constructor(currency: string, code: string, bid: number, ask: number) {
        this.currency = currency;
        this.code = code;
        this.bid = bid;
        this.ask = ask;
    }

    public setCurrency(currency: string) {
        this.currency = currency;
    }

    public getCurrency(): string {
        return this.currency;
    }

    public setCode(code: string) {
        this.code = code;
    }

    public getCode(): string {
        return this.code;
    }

    public setBid(bid: number) {
        this.bid = bid;
    }

    public getBid(): number {
        return this.bid;
    }

    public setAsk(ask: number) {
        this.ask = ask;
    }

    public getAsk(): number {
        return this.ask;
    }


}

export default Currency;