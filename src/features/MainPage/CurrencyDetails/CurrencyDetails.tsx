import React from "react";
import Currency from "../../../model/Currency";

const CurrencyDetails = (data: Currency): JSX.Element => {

        
    return (
        <tr>
            <td>{data.getCurrency()}</td>
            <td>{data.getCode()}</td>
            <td>{data.getBid()}</td>
            <td>{data.getAsk()}</td>
        </tr>
    );
}

export default CurrencyDetails;