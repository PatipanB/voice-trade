import React, {useState,useEffect} from 'react';
import {getDiff, getDiffUp, getDiffDown, getTenDiffUp, getTenDiffDown} from "../service/diff.service"
import {picDict} from '../price/price'

const Different = () => {
    const symbol="BTC"

    const [coinData,setCoinData] = useState({})

    useEffect(() => {
        fetchdata(symbol)
    }, []);

    const fetchdata = async (symbol) => {
        const result = await getDiff(symbol)
        const coinDiff = result.data
        console.log(coinDiff)
        setCoinData(coinDiff)
        console.log(coinData.percentChange)
    }

    return(
        <div className="Pricetable">
            <div className="Coinprice">
                <img src={picDict[coinData.symbol]}/>
                <div className="Textblock">
                    <p>{coinData.symbol}</p>
                    <p>Change : {Number.parseFloat(coinData.percentChange).toFixed(6)} %</p>

                </div>
            </div>
        </div>
    )
}

const TopdiffUp = () => {

    const [coinData,setCoinData] = useState({})

    useEffect(() => {
        fetchdata()
    }, []);

    const fetchdata = async () => {
        const result = await getDiffUp()
        const coinDiff = result.data
        console.log(coinDiff)
        setCoinData(coinDiff)
    }

    return(
        <div className="Pricetable">
            <div className="Coinprice">
                <img src={picDict[coinData.symbol]}/>
                <div className="Textblock">
                    <p>{coinData.symbol}</p>
                    <p>Change : {Number.parseFloat(coinData.percentChange).toFixed(6)} %</p>

                </div>
            </div>
        </div>
    )
}

const TopdiffDown = () => {

    const [coinData,setCoinData] = useState({})

    useEffect(() => {
        fetchdata()
    }, []);

    const fetchdata = async () => {
        const result = await getDiffDown()
        const coinDiff = result.data
        console.log(coinDiff)
        setCoinData(coinDiff)
    }

    return(
        <div className="Pricetable">
            <div className="Coinprice">
                <img src={picDict[coinData.symbol]}/>
                <div className="Textblock">
                    <p>{coinData.symbol}</p>
                    <p>Change : {Number.parseFloat(coinData.percentChange).toFixed(6)} %</p>

                </div>
            </div>
        </div>
    )
}

const TopTenDiffUp = () => {
    const [coinList,setCoinList] = useState([])

    useEffect(() => {
        fetchdata()
    }, []);

    const fetchdata = async () => {
        const result = await getTenDiffUp()
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
                    <p>Change : {Number.parseFloat(coin.coin.percentChange).toFixed(6)} %</p>

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

const TopTenDiffDown = () => {
    const [coinList,setCoinList] = useState([])

    useEffect(() => {
        fetchdata()
    }, []);

    const fetchdata = async () => {
        const result = await getTenDiffDown()
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
                    <p>Change : {Number.parseFloat(coin.coin.percentChange).toFixed(6)} %</p>

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

export {Different, TopdiffUp, TopdiffDown, TopTenDiffUp, TopTenDiffDown}