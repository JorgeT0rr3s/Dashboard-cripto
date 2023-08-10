import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './Componentes/Header';
import CardPrincipal from './Componentes/CardPrincipal';
import Card from './Componentes/Card';
import Convert from './Componentes/Convert';
import Footer from './Componentes/Footer';
import TableCoins from './Componentes/TableCoins';



export default function App() {
  const [coins, setCoins] = useState()
  const [currency, setCurrency] = useState()
  const [selCur, setSelCur] = useState("usd")


  const getData = async () => {
    /* consumo de las diferentes cripto monedas, se deja variable selCurl para elegir la moneda que se quiera en eñ header*/

    console.log('Solicitud a la API iniciada:', new Date().toISOString());

    const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${selCur}&order=market_cap_desc&per_page=4&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d%2C30d%2C1y`)
    const json = await response.json()
    const response_cur = await fetch('https://api.coingecko.com/api/v3/simple/supported_vs_currencies');
    const cur = await response_cur.json();
    setCoins(json)
    setCurrency(cur);

  }
  /*Renderizar la funcion get data al cargar la pagina por primera vez */
  useEffect(() => {
    getData()
  }, [])
  useEffect(() => {
    getData()
  }, [selCur])


  return (
    !coins ? "Cargando..." : (

      <div className='App' >

        <Header currencys={currency} fun={setSelCur} cur={selCur} />

        <main>
          <CardPrincipal json={coins[0]} cur={selCur} />
          <div className="cards_con">
            {coins.map(({ id, symbol, image, current_price, price_change_percentage_30d_in_currency }, index) => {
              if (index != 0) {
                return <Card key={index} price={`${symbol} - ${current_price} ${selCur} `} porcentaje={deleteDec(price_change_percentage_30d_in_currency, 2)} img={image} coinId={id} cur={selCur} />
              }
            })
            }
          </div>
        </main>
        <Convert />
        <TableCoins coins={coins} />
        <Footer />
      </div>

    )
  )

}


export function deleteDec(val, decimal) {
  return val.toFixed(decimal);
}

export function colorDec(num) {
  return num > 0 ? "green" : "red";
}

export const numberF = Intl.NumberFormat("es-Es");
