import React, {useState,useEffect} from 'react';
import "./price.css"
import {getPrice,getAllPrice} from "../service/price.service"

import BTC from "./pic/BTC.png"
import BNB from "./pic/BNB.png"
import ADA from "./pic/ADA.png"
import BAND from "./pic/BAND.png"
import CAKE from "./pic/CAKE.png"
import DOGE from "./pic/DOGE.png"
import ETH from "./pic/ETH.png"
import LINK from "./pic/LINK.png"
import LTC from "./pic/LTC.png"
import SUSHI from "./pic/SUSHI.png"
import XRP from "./pic/XRP.png"
import THB from "./pic/THB.png"
import USDT from "./pic/USDT.png"
import USD from "./pic/USD.png"

const picDict = {
    "BTC":BTC,
    "BNB":BNB,
    "ADA":ADA,
    "BAND":BAND,
    "CAKE":CAKE,
    "DOGE":DOGE,
    "ETH":ETH,
    "LINK":LINK,
    "LTC":LTC,
    "SUSHI":SUSHI,
    "XRP":XRP,
    "THB":THB,
    "USDT":USDT,
    "USD":USD
}

const Price = () => {
    const symbol="BNB"

    const base = sessionStorage.getItem("base") === undefined ? "USDT" : sessionStorage.getItem("base")

    const [coinData,setCoinData] = useState({})

    useEffect(() => {
        fetchdata(symbol)
    }, []);

    const fetchdata = async (symbol) => {
        const result = await getPrice(symbol)
        const coinPrice = result.data[0]
        console.log(coinPrice)
        setCoinData(coinPrice)
    }

    if(coinData === undefined){
        return(
        <div className="Pricetable">
            <div className="Coinprice">
                <div className="Textblock">
                    <p>Can not get {symbol} price</p>
                </div>
            </div>
        </div>
        )
    }
    return(
        <div className="Pricetable">
            <div className="Coinprice">
                <img src={picDict[symbol]}/>
                <div className="Textblock">
                    <p>{symbol}</p>
                    <p>price : {coinData.price.toString().slice(0,10)} {base}</p>
                </div>
            </div>
        </div>
    )
}

const AllPrice = () =>{

    const [coinList,setCoinList] = useState([])

    const base = sessionStorage.getItem("base") === null ? "USDT" : sessionStorage.getItem("base")
    console.log(sessionStorage.getItem("base"))

    useEffect(() => {
        fetchdata()
    }, []);

    const fetchdata = async () => {
        const result = await getAllPrice()
        const coinPrice = result.data
        console.log(coinPrice)
        console.log(typeof coinPrice)
        setCoinList(coinPrice)
    }
    
    const Coin = (coin) => {
        return(
            <div className="Coinprice">
                <img src={picDict[coin.coin.symbol]}/>
                <div className="Textblock">
                    <p>{coin.coin.symbol}</p>
                    <p>price : {coin.coin.price.toString().slice(0,10)} {base}</p>
                </div>
            </div>
        )
    }

    const renderCoin = (coin) => {
        return <Coin coin={coin} />;
      };
    
    if(coinList !== undefined){
        return(
            <div className="Pricetable">
                {coinList.map(renderCoin)}
            </div>
        )}
    return(
        <div></div>
    )
}

export{Price,AllPrice,picDict}