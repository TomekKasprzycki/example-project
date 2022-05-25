import Currency from "../model/Currency";

export const getCurrencyRateTable = async(): Promise<Currency[]> => {

    const response = await fetch('http://api.nbp.pl/api/exchangerates/tables/C', {
        method: "GET",
        headers: {
            "content-type": "application/json"
        }
    })
    const data = await response.json();
    const currencyList = data.rates;

    return currencyList;
}