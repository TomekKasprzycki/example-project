import React, { useEffect, useState } from "react";
import User from "../../model/User";
import { useAppSelector } from "../../app/hooks";
import { showActiveUser } from "../Login/LoginSlice";
import { Navigate } from "react-router-dom";
import { getCurrencyRateTable } from '../../services/NbpService';
import Currency from "../../model/Currency";
import CurrencyDetails from "./CurrencyDetails/CurrencyDetails";

const MainPage = (): JSX.Element => {

    useEffect(() => { document.title = "Strona główna" }, []);
    const [rates, setRates] = useState(new Array<Currency>());
    useEffect(() => {
        getCurrencyRateTable().then(res => setRates(res));
    })

    const user: User = useAppSelector(showActiveUser);

    return (
        user.getLogin() !== "" ? 
        <div>
            <h1>Tabela kursów NBP</h1>
            <table>
                <thead>
                    <tr>
                        <th>Nazwa waluty</th>
                        <th>Kod waluty</th>
                        <th>Cena kupna</th>
                        <th>Cena sprzedaży</th>
                    </tr>
                </thead>
                <tbody>
                    {rates.map((currencyData) => <CurrencyDetails key={currencyData.getCurrency()} data={currencyData} />)}
                </tbody>
            </table>
        </div> :
        <Navigate to="/" />
    )
}