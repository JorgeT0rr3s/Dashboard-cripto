import React from 'react';
import { useTheme } from './ThemeProvider';
import '../estilos/Header.css'


export default function Header({ currencys, fun, cur }) {
    const {theme, toggleTheme} = useTheme();

    return (
        <header className='app-header'>
            <p> Cripto Stadistics</p>
            <div className='select-button'>
                <select value={cur} name="coinSelect" id="coinSelect" onChange={() => {fun(document.getElementById("coinSelect").value)}}>
                    {currencys.map((item, index) => <option value={item} key={index} > {item}</option>)}
                </select>
                <button className='toogleMode' onClick={toggleTheme} >{theme.img}</button>
            </div>
        </header>
    )
}

