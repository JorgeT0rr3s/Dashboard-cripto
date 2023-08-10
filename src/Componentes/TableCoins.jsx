import React from "react";
import CoinRow from "./CoinRow"
import '../estilos/TableCoins.css'
import { useTheme } from "./ThemeProvider";

export default function TableCoins({ coins }) {
    const { theme } = useTheme();
    const tableStyles = {
        background: theme.background,
        color: theme.text,
    };

    return (
        <table className="table" style={tableStyles}>
            <thead>
                <tr>
                    <td>#</td>
                    <td>Moneda</td>
                    <td>Precio</td>
                    <td>24h</td>
                    <td>Vol. total</td>
                    <td>Cap. mercado</td>
                    <td>Ultimos 7 dias</td>
                </tr>
            </thead>

            <tbody>
                {coins.map((coin, index) => (
                    <CoinRow coin={coin} key={index} index={index + 1} />))}
            </tbody>
        </table>
    )

}

